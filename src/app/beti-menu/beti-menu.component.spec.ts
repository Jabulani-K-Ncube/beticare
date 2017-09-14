import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetiMenuComponent } from './beti-menu.component';

describe('BetiMenuComponent', () => {
  let component: BetiMenuComponent;
  let fixture: ComponentFixture<BetiMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetiMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
