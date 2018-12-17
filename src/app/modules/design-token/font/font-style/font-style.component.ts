import {Component} from '@angular/core';

@Component({
  selector: 'mds-font-style',
  template: `
    <h1>Font Style</h1>
    <div class="mds-diagram">
      <div class="gridl">
        <div class="grid">
          <div class="mds-text-operator" style="width: 40%">
            ABCDEFGHIJKLMNOPQRSTUVWXY
            Zabcdefghijklmnopqr
            stuvwxyz01234567890()[]
          </div>
          <div class="mds-text-operator">
            Normal
          </div>
        </div>
        <br/>
        <div class="grid">
          <div class="mds-text-observable" style="width: 40%">
            ABCDEFGHIJKLMNOPQRSTUV
            WXYZabcdefghijklmnopqr
            stuvwxyz01234567890()[]
          </div>
          <div class="mds-text-observable">
            Bold
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./font-style.component.scss']
})
export class FontStyleComponent {

}
