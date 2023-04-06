import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is from navbar', changes);
  }
  @Input() notificationNumber: number = 0;

  @Input() notificationList: string[] = [''];
}
