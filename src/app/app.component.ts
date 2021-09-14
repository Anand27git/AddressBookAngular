import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkEmailNotTaken(value:any,personId: string){
    throw new Error ('Method not implemented');
  }
  title = 'addressbook';
}
