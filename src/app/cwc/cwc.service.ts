import { Injectable } from "@angular/core";

// In  Angular 6 / Rxjs 6 the import is like below
// import { Observable, of } from 'rxjs';

// but in Angular 5.2.x and Rxjs 5x is:
import { Observable } from "rxjs";
import { of } from "rxjs";

import { KEdge } from "@colabo-knalledge/f-core";
import { KNodeFrontend } from "@colabo-knalledge/f-core/vos";

import { KnalledgeEdgeServiceExtended } from "@colabo-knalledge/i-core-services";
import { KnalledgeNodeService } from "@colabo-knalledge/f-store_core";
//TODO: #653: import { KnalledgeMapService } from "@colabo-knalledge/f-store_core";
import { RimaAAAService, SYSTEM_USER } from "@colabo-rima/i-aaa";
import * as config from "@colabo-utils/i-config";

import { GlobalEmittersArrayService } from "@colabo-puzzles/f-core";

//this consts are defined by INSTALL.MD data:
//const MAP_ID = "5b8a5260f8b8e40f3f250f9d"; //TEF
//const MAP_ID = "5b49e7f736390f03580ac9a7"; //Forum Vlasina

export const CWC_TYPE: string = "rima.user.dream";
export const CWC_EDGE_NAME: string = "CWC dream";
//export const CWC_NODE_NAME:string = "CWC dream";

export const CWCS_TO_FILL: number = 3;

export class CWCData {
	cwcs: string[];
	// cwcsEn: string[]; //TODO

	constructor(cwcs: string[]) {
		this.cwcs = cwcs;
	}
}

@Injectable()
export class CWCService {
	static mapId: string = config.GetString("mapId");

	cwcsSavedObserver: any = {}; //Observer
	CWCs: any[] = [];
	cwcsLeftSave: number = CWCS_TO_FILL;

	constructor(
		// private colabowareRFIDService: ColabowareRFIDService,
		private knalledgeEdgeService: KnalledgeEdgeServiceExtended,
		private knalledgeNodeService: KnalledgeNodeService,
		//TODO: #653: private knalledgeMapService: KnalledgeMapService,
		private globalEmitterServicesArray: GlobalEmittersArrayService,
		private RimaAAAService: RimaAAAService
	) {
		//getting data for the user:
		//this.globalEmitterServicesArray.get(this.colabowareIDProvided).subscribe('UsersProfilingComponent.user', this.coLaboWareProvidedData.bind(this));
		this.init();
	}

	init(): void {}

	createNewNodeWithEdge(newNode: KNodeFrontend, newEdge: KEdge, parentNodeId: string, listener) {
		newNode.iAmId = SYSTEM_USER;
		newNode.visual = {};
		newEdge.iAmId = SYSTEM_USER;
		newEdge.visual = {};

		//TODO: iAmId, createdAt, updatedAt
		this.knalledgeNodeService.create(newNode).subscribe(newNodeCreated.bind(this));

		// callback after the new user is created
		function newNodeCreated(newNode: KNodeFrontend): void {
			console.log("newUserCreated", newNode);
			this.activeUser = newNode;
			//this.nodes.push(newNode);

			newEdge.sourceId = parentNodeId;
			newEdge.targetId = newNode._id;
			newEdge.mapId = CWCService.mapId;
			//TODO: iAmId, createdAt, updatedAt
			this.knalledgeEdgeService.create(newEdge).subscribe(newEdgeCreated.bind(this));

			// callback after an edge to the new node is created
			function newEdgeCreated(newEdge: KEdge): void {
				console.log("newEdgeCreated", newEdge);
				listener(newNode, newEdge);
				//this.edges.push(newEdge);
			}
		}
	}

	/*
  TO MOVE into some AppService or InitService or ....
    gets initial data for the app to work:
    - CWCs
    TODO: - user data
  */
	getAppData(): void {
		//var map:KNode = new KNode();
		// this.heroService.getHero(id)
		//   .subscribe(hero => this.hero = hero);
		//this.node =
		this.getCWCs();
		// this.knalledgeEdgeService.queryInMap(environment.mapId)
		//   .subscribe(edges => this.edgesReceived(edges)); //as KNode
	}

	//loadCWCs():void{
	getCWCs(): Observable<any[]> {
		//return of(this.CWCsMockup);
		return this.knalledgeNodeService.queryInMapofType(CWCService.mapId, CWC_TYPE); //TODO: by User
		//.subscribe(nodes => this.cwcsReceived(nodes)); //as KNode}
	}

	saveCWCs(cwcD: CWCData): Observable<any> {
		const user_id: string = this.RimaAAAService.getUserId();
		let cwc: string;
		this.cwcsLeftSave = cwcD.cwcs.length;
		const that = this;
		this.knalledgeEdgeService.destroyByTypeByUser(CWC_TYPE, user_id).subscribe(function (data: any) {
			console.log("oldCWCEdgesDeleted", data);

			that.knalledgeNodeService.destroyByTypeByUser(CWC_TYPE, user_id).subscribe(function (data: any) {
				console.log("oldCWCNodesDeleted", data);

				for (const i in cwcD.cwcs) {
					cwc = cwcD.cwcs[i];

					const cwcNode: KNodeFrontend = new KNodeFrontend();
					cwcNode.iAmId = user_id;
					cwcNode.mapId = CWCService.mapId;
					cwcNode.name = cwc;
					cwcNode.type = CWC_TYPE;
					that.knalledgeNodeService.create(cwcNode).subscribe(function (node: KNodeFrontend) {
						//nodesaved, now saving edges
						console.log("cwcNodeCreated", node);
						const cwcEdge: KEdge = new KEdge();
						cwcEdge.sourceId = user_id;
						cwcEdge.targetId = node._id;
						cwcEdge.iAmId = user_id;
						cwcEdge.mapId = CWCService.mapId;
						cwcEdge.name = CWC_EDGE_NAME;
						cwcEdge.type = CWC_TYPE;
						that.knalledgeEdgeService.create(cwcEdge).subscribe(that.cwcESaved.bind(that));
					});
				}
			});
		});
		// https://angular.io/guide/observables
		return new Observable(this.cwcsSavedSubscriber.bind(this));
	}

	//could be done as anonymous, but we made it this way to be more clear the logic of Oberver
	cwcsSavedSubscriber(observer) {
		//:Observer) {
		console.log("cwcsSavedSubscriber");
		this.cwcsSavedObserver = observer;
		return { unsubscribe() {} };
	}

	cwcESaved(edge: any): void {
		console.log("cwcEdgeCreated", edge);
		this.cwcsLeftSave--;
		console.log("CWCsService::cwcSaved:", this.cwcsLeftSave, edge);
		if (this.cwcsLeftSave === 0) {
			console.log("CWCsService::ALL cwcSaved");

			//emitting Obstacle:
			this.cwcsSavedObserver.next(1); //TODO change value
			this.cwcsSavedObserver.complete();
		}
	}

	//getCWCs():Observable<KNode[]>{
	// getCWCs():any[]{
	//   return this.CWCs;
	// }

	/*
  //TODO: not used now:
  cwcsReceived(nodesS:Array<KNode>):void{
    // this.nodes = nodesS.data;
    //this.nodes.fill(nodesS); //this.nodes = nodesS.data;
    //this.nodes.name = 'test';
    this.CWCs= nodesS;

    console.log('[cwcsReceived] this.CWCs: ', this.CWCs);

    // this.users = [];
    // this.extractNodesOfType(KNode.TYPE_USER, this.users);
    //
    // this.tagsGroups = [];
    // this.extractNodesOfType(KNode.TYPE_TAGS_GROUP, this.tagsGroups);
    // this.tags = [];
    // this.extractNodesOfType(KNode.TYPE_TAG, this.tags);
    // this.groups = [];
    // this.extractNodesOfType(KNode.TYPE_USERS_GROUP, this.groups);
  }
  */
}
