import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetiLoginComponent } from './beti-login.component';

describe('BetiLoginComponent', () => {
  let component: BetiLoginComponent;
  let fixture: ComponentFixture<BetiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
