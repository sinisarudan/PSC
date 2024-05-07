console.log("STARTING TEST: QUEST-ChALLENGE!");

// import {globalSet} from '../config/global-testing';

import { } from 'jasmine'; //https://stackoverflow.com/questions/45431458/typescript-errors-in-spec-files-in-visual-studio-web-application
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {QuestChallengeShowComponent, PlaySustService } from '@colabo-playsust/f-core';

let playSustServiceSpy: jasmine.SpyObj<PlaySustService>;

describe('QuestChallengeShowComponent', () => {
  beforeEach(async(() => {
    // create `getQuestChallenge` spy on an object representing the PlaySustService

    const _playSustServiceSpy =
      jasmine.createSpyObj('PlaySustService', ['getQuestChallenge']);

    TestBed.configureTestingModule({
      declarations: [
        QuestChallengeShowComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
       {provide: PlaySustService, useValue: _playSustServiceSpy }
      ]
    }).compileComponents();

    // Inject services (that is what they say in testing tutorial, I think it is unecessary, only for accessing spyies it makes sense)
    playSustServiceSpy = TestBed.get(PlaySustService);
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(QuestChallengeShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should call PlaySustService', async(() => {
    // let branding:any = GetGeneral("branding");
    // const stubValue = 'stub value';
    const fixture = TestBed.createComponent(QuestChallengeShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(playSustServiceSpy.getQuestChallenge.calls.count())
      .toBe(1, 'spy method was called once');

    expect(playSustServiceSpy.getQuestChallenge.calls.argsFor(0))
      .toEqual(
        [ // list of parameters for the 0th call
          "3"
        ]);
  }));
});