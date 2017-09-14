import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BetiEmailComponent } from './beti-email/beti-email.component';
import { BetiLoginComponent } from './beti-login/beti-login.component';
import { BetiMenuComponent } from './beti-menu/beti-menu.component';
import { BetiNavBarComponent } from './beti-nav-bar/beti-nav-bar.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAnPyJvxihy8teY4O7To7e9N90ivYw5jzM',
  authDomain: 'beticare-d2655.firebaseapp.com',
  databaseURL: 'https://beticare-d2655.firebaseio.com',
  projectId: 'beticare-d2655',
  storageBucket: 'beticare-d2655.appspot.com',
  messagingSenderId: '385539611831'
};

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { BetiSignupComponent } from './beti-signup/beti-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BetiEmailComponent,
    BetiLoginComponent,
    BetiMenuComponent,
    BetiNavBarComponent,
    BetiSignupComponent
  ],
  imports: [
    BrowserModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    HttpModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      {
        path: '',
        /*component: HomeAuthComponent*/
        component: BetiEmailComponent
      },
      { path: 'login', component: BetiLoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
