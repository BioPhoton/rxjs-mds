import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShapeComponent } from './modules/design-token/shape/shape.component';
import {ShapeModule} from './modules/design-token/shape/shape.module';
import {ValueModule} from './modules/components/value/value.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ShapeModule,
    // ValueModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
