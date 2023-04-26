import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {
  constructor(private userService: UsersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges Method not implemented.');
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output()registerSuccess: EventEmitter<IUser> = new EventEmitter();

  // consumerForRegisterSuccess() {

  // }

  username = '';
  email = '';
  password = '';

  register(e: Event) {
    console.log(this.username, this.email, this.password);
    const response = this.userService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (response.success) {
      alert('Wow...New User created with name ' + this.username);
      this.registerSuccess.emit(
        {
          username: this.username,
          email: this.email,
          password: this.password
        }
      )
      return;
    }

    alert('User account creation failed!')
  }
}
