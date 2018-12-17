import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorComponent} from './color.component';

const COMPONENTS = [ColorComponent];
const DECLARATIONS = [COMPONENTS];
const EXPORTS = [...COMPONENTS];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DECLARATIONS],
  exports: [EXPORTS]
})
export class ColorModule { }
