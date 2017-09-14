import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetiNavBarComponent } from './beti-nav-bar.component';

describe('BetiNavBarComponent', () => {
  let component: BetiNavBarComponent;
  let fixture: ComponentFixture<BetiNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetiNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetiNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
