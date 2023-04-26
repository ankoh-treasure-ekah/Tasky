import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { LocalStoreService } from '../store/local-store-service.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private storeService: LocalStoreService, private router: Router, private authService:AuthserviceService) { }

  observer = new Subject();
  public subscribers = this.observer.asObservable();

  login(userData: Omit<IUser, 'username'>) {
    // 1) Check if user exists in our database(localStore)
    const response = this.storeService.get('users');
    let userInfo: IUser;
    if (response.status && response.data) {
      userInfo = response.data.find((user: any) => userData.email == user.email && userData.password == user.password);
      console.log(userInfo);
      
    }

    // 2) Return the user info
    // 3) If user does not exists, return a false
    if (userInfo!) {
      this.authService.setIsauthenticated(true);
      this.observer.next(userInfo);
      return userInfo
    }
    
    console.log('false');
    return false;
  }

  logout() {
    this.authService.setIsauthenticated(false);
    this.router.navigate(['/']);
  }

  register(userData: IUser) {
    const response = this.storeService.set('users', userData);
    if (response) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  }
  
}
