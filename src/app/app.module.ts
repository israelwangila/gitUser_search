import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentNameComponent } from './component-name/component-name.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
