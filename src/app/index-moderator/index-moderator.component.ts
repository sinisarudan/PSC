import { Component, OnInit } from "@angular/core";
import { RimaAAAService } from "@colabo-rima/i-aaa";
import { KNodeFrontend } from "@colabo-knalledge/f-core/vos";
import { Observable } from "rxjs";
import * as config from "@colabo-utils/i-config";

import { UtilsNotificationService, NotificationMsgType, NotificationMsg } from "@colabo-utils/f-notifications";

@Component({
	selector: "app-index-moderator",
	templateUrl: "./index-moderator.component.html",
	styleUrls: ["./index-moderator.component.css"],
})
export class IndexModeratorComponent implements OnInit {
  public appTitle: string = config.GetString("appTitle");

  constructor(
    private rimaAAAService: RimaAAAService,
    protected utilsNotificationService: UtilsNotificationService
  ) {}

  ngOnInit() {}

  get isLoggedIn(): Boolean {
    return this.rimaAAAService.getUser() !== null;
  }

  get isModerator() {
    return this.rimaAAAService.isModerator();
  }

  get loggedUser(): KNodeFrontend {
    return this.rimaAAAService.getUser();
  }

  logOut() {
    this.rimaAAAService.logOut();
  }

  snack() {
    this.utilsNotificationService.addNotification({
      type: NotificationMsgType.Info,
      title: "NOTE:",
      msg: "userid: " + this.rimaAAAService.getUser()._id
    });
  }
}
