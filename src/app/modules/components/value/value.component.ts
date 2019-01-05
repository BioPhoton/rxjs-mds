import {Component, Input, OnInit} from '@angular/core';
import {
  ColorsNames
} from '../../design-token/color/token-values';
import {DEFAULT_SHAPES} from '../../design-token/shape/token-values';
import {Size} from '../../design-token/size/token-values';

@Component({
  selector: 'mds-value',
  template: `
    <div class="mds-value" [ngClass]="[shape, color, size]">
      <div class="mds-shape">
        <div class="mds-value-content">{{content}}</div>
      </div>
      
    </div>
  `,
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  private colorsNames = ColorsNames;
  @Input() color: ColorsNames = 'mds-c-' + ColorsNames.Line;
  @Input() content: string;
  @Input() shape: string = 'mds-shape-' + DEFAULT_SHAPES.rectangle;
  @Input() size: string = 'mds-size-' + Size.normal;


  constructor() {

  }

  ngOnInit() {
  }

}
