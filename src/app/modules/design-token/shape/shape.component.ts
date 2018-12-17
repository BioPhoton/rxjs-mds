import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-shape',
  template: `
    <div class="mds-diagram">
      shape works!
    </div>
  `,
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
