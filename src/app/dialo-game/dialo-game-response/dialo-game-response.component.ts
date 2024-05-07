import { Component, OnInit } from "@angular/core";
import { DialoGameService } from "../dialo-game.service";
import { DialoGameResponse } from "./dialoGameResponse";
import { KNodeFrontend } from "@colabo-knalledge/f-core/vos";
// import { CardDecorator } from "../card-decorator//cardDecorator";
import { MyColaboFlowStates } from "@colabo-flow/f-core";
import { ColaboFlowService } from "@colabo-flow/f-core";

@Component({
	selector: "dialo-game-response",
	templateUrl: "./dialo-game-response.component.html",
	styleUrls: ["./dialo-game-response.component.css"],
})
export class DialoGameResponseComponent implements OnInit {
	//  response:DialoGameResponse;
	constructor(private dialoGameService: DialoGameService, public colaboFlowService: ColaboFlowService) {}

	ngOnInit(): void {
		//this.response = this.dialoGameService.lastResponse;
		//responseCards[0]
	}

	get response(): DialoGameResponse {
		return this.dialoGameService.lastResponse;
	}

	shown(): boolean {
		const state: MyColaboFlowStates = this.colaboFlowService.myColaboFlowState.state;
		//console.log('shown',state);
		return !(state === MyColaboFlowStates.NOT_STARTED) && !(state === MyColaboFlowStates.CHOSING_CHALLENGE_CARD);
	}

	getResponseCard(): KNodeFrontend {
		return this.dialoGameService.lastResponse.responseCards[0];
	}

	getChallengeCard(): KNodeFrontend {
		return this.dialoGameService.lastResponse.challengeCards[0];
	}

	// getDecorators():CardDecorator[]{
	//   return this.response.decorators;
	// }
}
