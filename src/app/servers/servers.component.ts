import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'Testserver';
  serverDisplay = false;
  clickButton = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggleMessage() {
    this.serverDisplay = ! this.serverDisplay;
    this.clickButton.push(this.serverName);
  }
}
