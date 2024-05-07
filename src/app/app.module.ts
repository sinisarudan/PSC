import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
//import { FormsModule } from '@angular/forms'; //for the 'Template Driven Forms'
import { ReactiveFormsModule } from "@angular/forms"; //for the 'Reactive Forms' i.e. 'Model Driven Forms'
import { FormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from "@angular/common/http";

// Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { MaterialModule } from "./materialModule";
// import { OrderModule } from 'ngx-order-pipe'; //TODO
//import {MatInputModule, MatFormFieldControl} from '@angular/material';
import { MatFormioModule } from "angular-material-formio";

// Colabo Puzzle modules
import { KnalledgeNodeService, KnalledgeEdgeService, KnalledgeStoreCoreModule } from "@colabo-knalledge/f-store_core";
//TODO: #653 import { KnalledgeMapService, KnalledgeMapVoService } from "@colabo-knalledge/f-store_core";
import { KnalledgeEdgeServiceExtended } from "@colabo-knalledge/i-core-services";
import { RimaAaaModule } from "@colabo-rima/f-aaa";
// import { ModerationCoreModule } from "@colabo-moderation/f-core";
import { ColaboFlowCoreModule } from "@colabo-flow/f-core";
import { TopiChatTalkModule } from "@colabo-topichat/f-talk";
import { TopiChatClientsOrchestrationModule } from "@colabo-topichat/f-clients-orchestration";
import { SimilarityModule } from "@colabo-ai-ml/f-similarity";
import { MediaUploadModule } from "@colabo-media/f-upload";
import { ColaboFlowAuditModule } from "@colabo-flow/f-audit";
//TODO: #653 import { MapEngineModule } from "@colabo-map/f-engine";
import { SdgCoreModule } from "@colabo-sdg/core";
import { BrainstormingModule } from "@colabo-brainstorming/f-core";
import { ChangeModule } from "@colabo-flow/f-change";
import { PlaySustModule } from "@colabo-playsust/f-core";
import { PlaySustManagementModule } from "@colabo-playsust/f-management";
// import { PresentationCoreModule } from '@colabo-presentation/core';

import { CWCService } from "./cwc/cwc.service";
import { DialoGameService } from "./dialo-game/dialo-game.service";

// import {UsersProfilingService} from './users-profiling/users-profiling.service';
// import {UsersClusteringService} from './users-clustering/users-clustering.service';
// import { UsersClusteringComponent } from './users-clustering/users-clustering.component';
// import {UiSmsComponent} from './ui-sms/ui-sms.component';
// import {SMSApiService} from './ui-sms/sms-api.service';
// import {PromptsPresentationComponent} from './prompts-presentation/prompts-presentation.component';
import { IndexComponent } from "./index/index.component";
import { IndexModeratorComponent } from "./index-moderator/index-moderator.component";
import { CwcComponent } from "./cwc/cwc.component";
// import {InsightsComponent} from './insights/insights.component';
// import {RegisteredUsersComponent} from './registered-users/registered-users.component';
// import {UserCardComponent} from './users/user-card.component';

import { DialoGameComponent } from "./dialo-game/dialo-game.component";
import { DialogameCardsComponent } from "./dialo-game/dialogame-cards/dialogame-cards.component";
import { DialogameCardComponent } from "./dialo-game/dialogame-cards/dialogame-card/dialogame-card.component";
import { DialoGameResponseComponent } from "./dialo-game/dialo-game-response/dialo-game-response.component";
import { CardDecoratorComponent } from "./dialo-game/card-decorator/card-decorator.component";
import { UtilsNotificationModule, UtilsNotificationService } from "@colabo-utils/f-notifications";
//TODO: #653 import { MapsCoreModule } from "@colabo-maps/core";

// import {ModerationPanelComponent} from '@colabo-moderation/f-core';
// import { ResultsVisualizationComponent } from '@colabo-moderation/f-core';
import { ModerationCoreModule } from "@colabo-moderation/f-core";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

// import { UsersProfilingComponent } from './users-profiling/users-profiling.component';
//
// import {UsersPopulationComponent} from './users-population/users-population.component';
//
// import {UserInfoComponent} from './user-info/user-info.component';
//
// import {TagsPopulationComponent} from './tags-population/tags-population.component';
//
// import {UsersGroupsComponent} from './users-groups/users-groups.component';

const moduleDeclarations = [
	AppComponent,
	//UiSmsComponent,
	// PromptsPresentationComponent,
	// UsersProfilingComponent,
	// UsersClusteringComponent,
	// UsersPopulationComponent,
	// UserInfoComponent,
	// TagsPopulationComponent,
	// UsersGroupsComponent,
	IndexComponent,
	IndexModeratorComponent,
	CwcComponent,
	// InsightsComponent,
	// RegisteredUsersComponent,
	// UserCardComponent,
	// ModerationPanelComponent,
	// ResultsVisualizationComponent,
	DialogameCardsComponent,
	DialoGameComponent,
	DialogameCardComponent,
	DialoGameResponseComponent,
	CardDecoratorComponent,

	// AdvancedDialogTest
];

const moduleImports = [
	BrowserModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	ModerationCoreModule,

	// Material
	BrowserAnimationsModule,
	MaterialModule,
	FlexLayoutModule,
	MatFormioModule,
	AppRoutingModule,
	// , OrderModule
	// ,
	// MatInputModule,
	// MatFormFieldControl
	// rima

	// Colabo Puzzle modules
	RimaAaaModule,
	KnalledgeStoreCoreModule,
	// ModerationCoreModule,
	ColaboFlowCoreModule,
	TopiChatTalkModule,
	TopiChatClientsOrchestrationModule,
	SimilarityModule,
	MediaUploadModule,
	UtilsNotificationModule,
	ColaboFlowAuditModule,
	//TODO: #653 MapEngineModule,
	//TODO: #653 MapsCoreModule,
	SdgCoreModule,
	BrainstormingModule,
	ChangeModule,
	PlaySustModule,
	PlaySustManagementModule,
	// , PresentationCoreModule
];
// moduleImports.push(MainModule);

moduleImports.push(AppRoutingModule);

// import {GlobalEmitterService} from '@colabo-puzzles/f-core/code/puzzles/globalEmitterService';
import { GlobalEmittersArrayService } from "@colabo-puzzles/f-core";

declare let window: any;

// old external way of declaring puzzles' config
// export var Plugins:any = window.Config.Plugins;

@NgModule({
	declarations: moduleDeclarations,
	imports: moduleImports,
	entryComponents: [
		// You must include your dialog class in the list of entryComponents in your module definition so that the AOT compiler knows to create the ComponentFactory for it.
		// @see: https://material.angular.io/components/dialog/overview#aot-compilation
		// AdvancedDialog,
		// NotificationComponent
	],
	providers: [
		UtilsNotificationService,
		KnalledgeEdgeService,
		KnalledgeNodeService,
		//TODO: #653 KnalledgeMapService,
		//TODO: #653 KnalledgeMapVoService,
		KnalledgeEdgeServiceExtended,

		// old external way of injecting puzzles' config
		// through Plugins service
		// {provide: "Plugins", useValue: Plugins},

		// provide ng build error: "Can't resolve all parameters for GlobalEmitterService"
		// {provide: GlobalEmitterService, useClass: GlobalEmitterService},
		{
			provide: GlobalEmittersArrayService,
			useClass: GlobalEmittersArrayService,
		},
		// TODO: move out of here, into puzzles' modules
		CWCService,
		DialoGameService,
		// ColabowareRFIDService,
		// UsersProfilingService,
		// UsersClusteringService
		//SMSApiService
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
