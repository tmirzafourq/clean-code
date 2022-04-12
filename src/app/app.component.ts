import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'clean-code';
  ngOnInit() {
    console.log('hello world');
    console.log('hello world');
    // normal console log
  }
}
