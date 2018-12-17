import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mds-font-family',
  template: `
    <h1>Font Family</h1>
    <div class="mds-diagram">
      <div class="grid">
        <div class="grid grid-v" style="width: 50%">
          <h2 style="width: 100%">
            Sans-Serif <br/>
            Font-Face
          </h2>
          <div class="mds-text-operator">
            ABCDEFGHIJ
          </div>
          <div class="grid">
            <div *ngFor="let b of gridBlocks" class="mds-block">
            </div>
          </div>
        </div>
        <div class="grid grid-v mds-inactive" style="width: 50%">
          <h2 style="width: 100%">
            Serif <br/>
            Font-Face
          </h2>
          <div class="mds-text-operator serif-font-face">
            ABCDEFGHIJ
          </div>
          <div class="grid">
            <div *ngFor="let b of gridBlocks" class="mds-block">
            </div>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="grid grid-v" style="width: 50%">
          <h2 style="width: 100%">
            Monospace<br/>
            Font-Face
          </h2>
          <div class="mds-text-operator mds-inactive">
            ABCDEFGHIJ
          </div>
          <div class="grid">
            <div *ngFor="let b of gridBlocks" class="mds-block mds-active">
            </div>
          </div>
        </div>
        <div class="grid grid-v mds-inactive" style="width: 50%">
          <h2 style="width: 100%">
            Proportional<br/>
            Font-Face
          </h2>
          <p class="mds-text-operator mds-inactive proportional-font-face">
            ABCDEFGHIJ
          </p>
          <div class="grid">
            <div *ngFor="let b of gridBlocks" class="mds-block mds-active">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./font-family.component.scss']
})
export class FontFamilyComponent implements OnInit {

  gridBlocks = Array(10);

  constructor() {
  }

  ngOnInit() {
  }

}
