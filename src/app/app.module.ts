import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { DoublePipe } from './pipes/double.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
