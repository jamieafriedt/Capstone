import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentComponentComponent } from './assessment-component.component';

describe('AssessmentComponentComponent', () => {
  let component: AssessmentComponentComponent;
  let fixture: ComponentFixture<AssessmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
