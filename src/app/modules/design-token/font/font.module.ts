import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontFamilyComponent} from './font-family/font-family.component';
import { FontStyleComponent } from './font-style/font-style.component';
import {FontSizeComponent} from './font-size/font-size.component';

const COMPONENTS = [FontFamilyComponent, FontStyleComponent, FontSizeComponent];
const DECLARATIONS = [...COMPONENTS];
const EXPORTS = [...COMPONENTS];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DECLARATIONS],
  exports: [EXPORTS]
})
export class FontModule { }
