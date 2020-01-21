import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverDisplay = false;
  clickNumber = 1;
  clickButton = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggleMessage() {
    this.serverDisplay = ! this.serverDisplay;
    this.clickButton.push(this.clickNumber++);
  }
}
