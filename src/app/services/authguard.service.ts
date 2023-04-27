import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, CanActivate, UrlTree } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authservice: AuthserviceService, private router: Router) { }

  // CanActivateFn(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   if(this.authservice.isRouteActivated()){
  //     return true;
  //   }

  //   this.router.navigate(['/dasboard']);
  //   return false;
  // }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarded');
    if(this.authservice.getIsRouteActivated()) {
      return true;
    }

    this.router.navigate(['page-404']);
    return false;
  }
}
