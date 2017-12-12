<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Ziggeo Application Demo';

    constructor () {}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit () {
      this['ziggeo-video'] = 'asdasdadadasd';
      console.log('::', this);
      // debugger;
  }
>>>>>>> db532c472412e030c8fc396e45975e2dcc70465a
}
