import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mds-font-size',
  template: `
    <h1>Font Size</h1>
    <div class="mds-diagram">
      <div class="gridl">
        <div class="grid">
          <div class="mds-text-operator"
            style="width: 40%; margin-right: 20px;">
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890()[]
          </div>
          <div class="mds-text-operator">
            Big 1em
          </div>
        </div>
        <br/>
        <div class="grid">
          <div class="mds-text-timespan"
            style="width: 40%; margin-right: 20px;">
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890()[]
          </div>
          <div class="mds-text-timespan">
            Medium 0.67em
          </div>
        </div>

        <br/>
        <div class="grid">
          <div class="mds-text-legend" style="width: 40%; margin-right: 20px;">
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890()[]
          </div>
          <div class="mds-text-legend">
            Small 0.5em
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
