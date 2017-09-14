import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetiEmailComponent } from './beti-email.component';

describe('BetiEmailComponent', () => {
  let component: BetiEmailComponent;
  let fixture: ComponentFixture<BetiEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetiEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetiEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
