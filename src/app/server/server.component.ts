import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .displayMess {
      color: white;
    }
  `]
})
export class ServerComponent {
  clickNumber = 1;

  constructor() {
  }

  getClickNumber() {
    return this.clickNumber++;
  }

  getColor() {
    if(this.clickNumber >= 5) {
      return 'blue';
    }
  }
}
