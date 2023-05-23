import { Injectable } from '@angular/core';

import { API } from '../../constants'
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  bookTicket(body:any){
    let token = this.authService.currentUser.token
    return this.http.post(API + '/ticket', body, {
      headers: new HttpHeaders().set('Authorization', token)
    })
  }

  getTickets(id:any){
    let token = this.authService.currentUser.token
    return this.http.get(API + '/ticket/' + id, {
      headers: new HttpHeaders().set('Authorization', token)
    })
  }

}
