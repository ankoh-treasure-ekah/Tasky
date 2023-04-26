import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  private isAuthenticated!: boolean;

  getIsRouteActivated(): boolean {
    return this.isAuthenticated;
  }

  setIsauthenticated(isAuth: boolean): void {
    this.isAuthenticated = isAuth;
  }

}
