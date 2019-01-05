import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mds-shape',
  template: `
    <div class="mds-diagram grid">
      <mds-value content="a"></mds-value>
    </div>
  `,
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  @Input() shapeTypes: string[];
  constructor() { }

  ngOnInit() {
  }


}
