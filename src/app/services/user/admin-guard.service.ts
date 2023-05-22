import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

   if(this.authService.isLoggedIn() && this.authService.isAdmin()){
    return true
   }

   this.router.navigate(['/'])
   return false

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if(this.authService.isLoggedIn() && this.authService.isAdmin()){
      return true
     }
  
     this.router.navigate(['/'])
     return false
  }

}
