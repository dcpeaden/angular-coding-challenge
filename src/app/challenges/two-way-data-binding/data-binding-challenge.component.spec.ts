import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingChallengeComponent } from './data-binding-challenge.component';

describe('DataBindingChallengeComponent', () => {
  let component: DataBindingChallengeComponent;
  let fixture: ComponentFixture<DataBindingChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
