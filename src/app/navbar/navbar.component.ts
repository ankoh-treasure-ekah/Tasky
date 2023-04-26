import { ImplicitReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private service: UsersService){};

  notifications: number = 0;

  @Input() userIn: boolean = false;

  @Input() userName = '';


  ngOnInit(): void {
    this.service.observer.subscribe((data) => {
      console.log((data as any).username);
      ++this.notifications;

      this.userName = (data as any).username

      this.userIn = !this.userIn;
    })
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('this is from navbar', changes, typeof(changes));
  //   if(changes['notificationNumber']) {
  //     console.log('the number has changed');
  //   }
  // }
  // @Input() notificationNumber: number = 0;

  // @Input() notificationList: string[] = [''];

  // @Output() notifyParent: EventEmitter<string[]> = new EventEmitter();


  // alertParent(dataToSend: string[]) {
  //   this.notifyParent.emit(dataToSend);
  // }
  display = false;

  

  logInUser(e: any) {
    console.log(e);
  }

  logout(e: any) {
    this.userIn = !this.userIn;
    this.service.logout();
  }




}
