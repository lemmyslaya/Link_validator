import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
