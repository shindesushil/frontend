import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../constants'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:any = ''

  constructor(private http: HttpClient, private router: Router) {
    if(localStorage.getItem('sessionToken')){
      let token:any = JSON.parse(localStorage.getItem('sessionToken') || '')
      this.currentUser = {
        email: token.email,
        username: token.username,
        _id: token._id
      }
    }
   }

  signUp(body:any){
    return this.http.post(API + '/users/register', body)
  }

  login(body:any){
    return this.http.post(API + '/users/login', body)
  }

  isLoggedIn(){
    return !(this.currentUser === '')
  }

  isAdmin(){
    if(this.isLoggedIn())
      return this.currentUser.email === 'admin@system.com'
    return false
  }

  logout(){
    localStorage.removeItem('sessionToken')
    this.currentUser = ''
    this.router.navigate(['/'])
  }

}
