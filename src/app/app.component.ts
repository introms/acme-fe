import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'acme-fe';
  public username: string;

  public constructor() {
    this.username = 'ACUNAMATATA';
  }

  public changeUsername() {
    console.log('changeUsername called');
    this.username = 'CICCIO-BACICCIO';
  }

}
