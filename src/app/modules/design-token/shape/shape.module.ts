import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShapeComponent} from './shape.component';

const COMPONENTS = [ShapeComponent];
const DECLARATIONS = [...COMPONENTS];
const EXPORTS = [...COMPONENTS];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DECLARATIONS],
  exports: [EXPORTS]
})
export class ShapeModule { }
