import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetiFirebaseTesterComponent } from './beti-firebase-tester.component';

describe('BetiFirebaseTesterComponent', () => {
  let component: BetiFirebaseTesterComponent;
  let fixture: ComponentFixture<BetiFirebaseTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetiFirebaseTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetiFirebaseTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
