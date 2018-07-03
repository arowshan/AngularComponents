import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { DoublePipe } from './pipes/double.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
