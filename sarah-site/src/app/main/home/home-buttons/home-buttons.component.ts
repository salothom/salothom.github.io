import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-buttons',
  templateUrl: './home-buttons.component.html',
  styleUrls: ['../../../app.component.css']
})
export class HomeButtonsComponent implements OnInit {

  constructor() { }

  @Input() buttonName: any;

  ngOnInit() {
  }

}
