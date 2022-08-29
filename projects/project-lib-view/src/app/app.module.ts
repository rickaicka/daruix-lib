import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnDaruixPageComponent } from './btn-daruix-page/btn-daruix-page.component';
import {DaruixModule} from "../../../daruix/src/lib/daruix.module";

@NgModule({
  declarations: [
    AppComponent,
    BtnDaruixPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DaruixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
