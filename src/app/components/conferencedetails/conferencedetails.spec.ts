import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDetails } from './conferencedetails';

describe('ConferenceDetails', () => {
  let component: ConferenceDetails;
  let fixture: ComponentFixture<ConferenceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
