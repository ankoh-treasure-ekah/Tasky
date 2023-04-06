import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnChanges {

  constructor(private userService: UsersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges Method not implemented.');
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  username = '';
  email = '';
  password = '';

  // Register(e: Event | any) {
  //   console.log(this.username, this.password, this.email)
  // }

  // getUsername(e: Event| any) {
  //   this.username = e.target.value;
  // }
  // getEmail(e: Event | any) {
  //   this.username = e.target.value;
  // }
  // getPassword(e: Event | any) {
  //   this.password = e.target.value;
  // }

  register(e: Event) {
    console.log(this.username, this.email, this.password);
    const response = this.userService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (response.success) {
      alert('Wow...New User created with name ' + this.username);
      return;
    }

    alert('User account creation failed!')
  }
  
}
