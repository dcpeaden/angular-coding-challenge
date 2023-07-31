import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsChallengeComponent } from './reactive-forms-challenge.component';

describe('ReactiveFormsChallengeComponent', () => {
  let component: ReactiveFormsChallengeComponent;
  let fixture: ComponentFixture<ReactiveFormsChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
