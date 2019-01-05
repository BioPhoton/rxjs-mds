import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mds-color',
  template: `
    <h1>Colors</h1>
    <div class="mds-diagram">
      <div class="grid">
        <div *ngFor="let c of colors"
          [ngClass]="c.className"
          class="box">
          <p class="mds-text-value">{{c.description}}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() colors: { description: string, className: string }[];

  constructor() {
  }

  ngOnInit() {

  }

}
