import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private  route: Router){
    this.activatedRoute.params.subscribe((data) => {
      if(data['email'] && data['password']) {
        console.log('user was sent');
        this.userIn = true;
        this.email = data['email'];
        this.password = data['password'];

        // this.observer.next([data['email'], data['password']]);
        // this.userService.passAccountDetails([data['email'], data['password']]);
      }
      else {
        console.log('nothing here')
        console.log(data)
      }
    })
    
  }
  email: string = '';
  password: string = '';
  userIn: boolean = false;
  
  ngOnInit(): void {
    
  }

  viewTask() {
    this.route.navigate(['/dashboard/tasks', {
      username: this.email,
      password: this.password
    }])
  }

  
}
