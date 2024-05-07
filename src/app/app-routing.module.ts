import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { UsersProfilingComponent } from './users-profiling/users-profiling.component';
// import { UsersClusteringComponent } from './users-clustering/users-clustering.component';
// import { UsersPopulationComponent } from './users-population/users-population.component';
// import { TagsPopulationComponent } from './tags-population/tags-population.component';
// import {UsersGroupsComponent} from './users-groups/users-groups.component';
// import {UiSmsComponent} from './ui-sms/ui-sms.component';
// import {PromptsPresentationComponent} from './prompts-presentation/prompts-presentation.component';
import { IndexComponent } from "./index/index.component";
import { IndexModeratorComponent } from "./index-moderator/index-moderator.component";
import { RimaRegisterPageComponent, RimaAccountPageComponent } from "@colabo-rima/f-aaa";
import { SelectSdgsComponent } from "@colabo-sdg/core";
import { RimaLoginPageComponent } from "@colabo-rima/f-aaa";
import { AvatarUploadComponent } from "@colabo-media/f-upload";
// import {InsightsComponent} from './insights/insights.component';
import { DialoGameComponent } from "./dialo-game/dialo-game.component"; //PTW
import { ModerationPanelComponent } from "@colabo-moderation/f-core";
//import { ModerationCoreModule } from '@colabo-moderation/f-core/lib/module';
import { TopiChatTalkForm } from "@colabo-topichat/f-talk";
import { TopiChatClientsOrchestrationForm } from "@colabo-topichat/f-clients-orchestration";
// import { MapComponent } from "@colabo-knalledge/f-map";
// import { ResultsVisualizationComponent } from '@colabo-moderation/f-core/lib/module';
import { ResultsVisualizationComponent } from "@colabo-moderation/f-core";

import { ColaboFlowAuditForm } from "@colabo-flow/f-audit";

//TODO: #653
// import { MapEngineForm } from "@colabo-map/f-engine";
// import { MapsListComponent } from "@colabo-maps/core";

import { ParticipantsComponent } from "@colabo-moderation/f-core";
import { ClustersComponent } from "@colabo-moderation/f-core";
import { BrainstormingComponent } from "@colabo-brainstorming/f-core";
import { PlaySustComponent, PlaySustStatsComponent } from "@colabo-playsust/f-core";
import { PlaySustMComponent } from "@colabo-playsust/f-management";
import { TeamsModerationComponent } from "@colabo-moderation/f-core";
// import { KnalledgeContainerComponent } from "@colabo-knalledge/f-store_core";
import { TeamsManagementComponent } from "@colabo-rima/f-aaa";
const routes: Routes = [
	{
		// default route
		path: "",
		pathMatch: "full",
		component: IndexComponent,
	},
	{
		path: "home",
		component: IndexComponent,
	},
	// {
	//   path: 'knalledge-container',
	//   component: KnalledgeContainerComponent
	// },
	{
		path: "moderator",
		pathMatch: "full",
		component: IndexModeratorComponent,
	},
	// {
	//   path: 'ui-sms',
	//   component: UiSmsComponent
	// },
	// {
	//   path: 'prompts-presentation',
	//   component: PromptsPresentationComponent
	// },
	// {
	//   path: 'users-profiling',
	//   component: UsersProfilingComponent
	// },
	// {
	//   path: 'users-clustering',
	//   component: UsersClusteringComponent
	// },
	// {
	//   path: 'users-population',
	//   component: UsersPopulationComponent
	// },
	// {
	//   path: 'tags-population',
	//   component: TagsPopulationComponent
	// },
	// {
	//   path: 'users-groups',
	//   component: UsersGroupsComponent
	// },
	{
		path: "rima-register",
		component: RimaRegisterPageComponent,
	},
	{
		path: "rima-login", //it is also hardcoded in `src/frontend/dev_puzzles/flow/core/lib/colabo-flow.service.ts` as `LOGGED_IN_ROUTE` so when one is changed, the other should be cahnged too
		component: RimaLoginPageComponent,
	},
	{
		path: "rima-account",
		component: RimaAccountPageComponent,
	},
	{
		path: "select-sdgs",
		component: SelectSdgsComponent,
	},
	// {
	//   path: 'cwc',
	//   component: CwcComponent
	// },
	{
		path: "avatar",
		component: AvatarUploadComponent,
	},
	{
		path: "moderation-panel",
		component: ModerationPanelComponent,
	},
	// {
	//   path: 'insights',
	//   component: InsightsComponent
	// },
	{
		path: "dialo-game",
		component: DialoGameComponent,
	},
	{
		path: "cwc",
		component: TopiChatTalkForm,
	},
	{
		path: "talk",
		component: TopiChatTalkForm,
	},
	{
		path: "orchestration",
		component: TopiChatClientsOrchestrationForm,
	},
	// {
	//   path: "map",
	//   component: MapComponent
	// },
	/* //TODO: #653
	{
		path: "map-new",
		component: MapEngineForm,
	},
	// same route but with the map id provided
	{
		path: "map-new/id/:id",
		component: MapEngineForm,
	},
	{
		path: "maps",
		component: MapsListComponent,
	}, */
	{
		path: "results",
		component: ResultsVisualizationComponent,
	},
	{
		path: "colaboflow-audits",
		component: ColaboFlowAuditForm,
	},
	{
		path: "participants",
		component: ParticipantsComponent,
	},
	{
		path: "clusters",
		component: ClustersComponent,
	},
	{
		path: "brainstorming",
		component: BrainstormingComponent,
	},
	{
		path: "playsust",
		component: PlaySustComponent,
	},
	{
		path: "playsust-stats",
		component: PlaySustStatsComponent,
	},
	{
		path: "playsust-m",
		component: PlaySustMComponent,
	},
	{
		path: "teams-moderation",
		component: TeamsModerationComponent,
	},
	{
		path: "teams",
		component: TeamsManagementComponent,
	},
];

@NgModule({
	exports: [
		// makes router directives available for use in
		// other components that will need them
		RouterModule,
	],
	imports: [
		// initialize RouterModule with routes
		RouterModule.forRoot(routes),
	],
})
export class AppRoutingModule {}
