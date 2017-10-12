import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ZiggeoRootModule } from "angular2-ziggeo";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent, ZiggeoRootModule
  ],
  bootstrap: [ AppComponent ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
