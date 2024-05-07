import { Component, OnInit } from "@angular/core";
import { RimaAAAService } from "@colabo-rima/i-aaa";
import { ColaboFlowService } from "@colabo-flow/f-core";
import { KNodeFrontend } from "@colabo-knalledge/f-core/vos";
import { Observable } from "rxjs";
import * as config from "@colabo-utils/i-config";

@Component({
	selector: "app-index",
	templateUrl: "./index.component.html",
	styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
	public appTitle: string = config.GetString("appTitle");
	// public static CF_WHERE: string = "INDEX";

	constructor(private rimaAAAService: RimaAAAService, private colaboFlowService: ColaboFlowService) {}

	ngOnInit() {
		// this.colaboFlowService.startKeepingMyState(IndexComponent.CF_WHERE);
	}

	ngAfterViewChecked() {}

	get isLoggedIn(): boolean {
		return this.rimaAAAService.getUser() !== null;
	}

	get loggedUser(): KNodeFrontend {
		return this.rimaAAAService.getUser();
	}

	get isModerator() {
		return this.rimaAAAService.isModerator();
	}
}
