import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasky';
  description = 'This is our great and Amazing Angular Project';
  role = 'admin';
  notifications = 0;

  notificationData: string[] = ['ismael', 'romaric', 'emma', 'merveil'];
  allNotifications: string[] = [];

  constructor() {
    setInterval(() => {
      this.allNotifications = [...this.allNotifications, this.notificationData[Math.floor(Math.random() * this.notificationData.length)]]
      this.notifications += 5;
    }, 1000)
  }



  //Data Binding in Angular
  //=> one way Data binding: The component in which you have the property can be referenced to the app
}
