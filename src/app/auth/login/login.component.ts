import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private service: UsersService, private router: Router){}

  @Output() UserIn = new EventEmitter<IUser>();

  

  email = '';
  password = '';

  login(e: Event) {

    const response = this.service.login({
      email: this.email,
      password: this.password
    })

    if(response) {
      alert('user logged in successfully');
      this.UserIn.emit(response);
      this.router.navigate(['./dashboard']);
      return
    }

    alert('email or password incorrect');

  }

  




}
