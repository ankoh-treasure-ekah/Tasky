import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges Method not implemented.');
  }
  
  ngOnInit(): void {
    
  }

  
}
