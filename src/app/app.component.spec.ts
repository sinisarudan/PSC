// chai
// import { expect, should, assert, use } from 'chai';
import { should, assert, use } from "chai";
import chaiString from "chai-string";
use(chaiString);

// import sinon from 'sinon';
import * as sinon from "sinon";
should();
import sinonChai from "sinon-chai";
use(sinonChai);

import {} from "jasmine"; //https://stackoverflow.com/questions/45431458/typescript-errors-in-spec-files-in-visual-studio-web-application

// console.log("Hello from app.component.spec.ts")

import { globalSet } from "../config/global-testing";
import { GetPuzzle, GetGeneral } from "@colabo-utils/i-config";

import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { UtilsNotificationService, NotificationMsgType } from "@colabo-utils/f-notifications";
import { ColaboFlowService } from "@colabo-flow/f-core";

let utilsNotificationServicesSpy: sinon.SinonStubbedInstance<UtilsNotificationService>;
let colaboFlowServiceSpy: sinon.SinonStubbedInstance<ColaboFlowService>;

describe("AppComponent", () => {
	beforeEach(async(() => {
		// create `addNotification` spy on an object representing the UtilsNotificationService
		const _utilsNotificationServicesSpy = sinon.createStubInstance(UtilsNotificationService);
		// create `startKeepingMyState` spy on an object representing the ColaboFlowService
		const _colaboFlowServiceSpy = sinon.createStubInstance(ColaboFlowService);

		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterTestingModule],
			providers: [
				{ provide: UtilsNotificationService, useValue: _utilsNotificationServicesSpy },
				{ provide: ColaboFlowService, useValue: _colaboFlowServiceSpy },
			],
		}).compileComponents();
		// Inject services (that is what they say in testing tutorial, I think it is unecessary, only for accessing spyies it makes sense)
		utilsNotificationServicesSpy = TestBed.get(UtilsNotificationService);
		colaboFlowServiceSpy = TestBed.get(ColaboFlowService);
	}));
	it("should create the app", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		app.should.exist;
	}));
	it("should call UtilsNotificationServices", async(() => {
		const branding: any = GetGeneral("branding");
		const stubValue = "stub value";
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		app.should.exist;
		utilsNotificationServicesSpy.addNotification.should.have.been.calledOnce;
		utilsNotificationServicesSpy.addNotification.should.have.been.calledWith(
			// list of parameters for the 0th call
			{
				type: NotificationMsgType.Info,
				title: branding.title,
				msg: "starting ...",
			}
		);
	}));
	it("should not call ColaboFlowService yet", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		app.should.exist;
		colaboFlowServiceSpy.startKeepingMyState.should.have.not.been.called;
	}));
	it(`should have as title 'app'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		app.title.should.be.equal("app");
	}));
	it("should have routes properly set with routes and texts", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
		// https://stackoverflow.com/questions/10777684/how-to-use-queryselectorall-only-for-elements-that-have-a-specific-attribute-set
		compiled.querySelector('a[routerLink="/"]').textContent.should.contain("Home");
		compiled.querySelector('a[routerLink="/rima-register"]').textContent.should.contain("Register");
	}));
});
