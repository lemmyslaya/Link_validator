import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ControlsComponent } from './controls/controls.component';

import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
