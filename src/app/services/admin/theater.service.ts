import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../constants'

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient) { }

  getAllTheaters(){
    return this.http.get(API + '/theatres')
  }

  getTheater(id:any){
    return this.http.get(API + '/theatres/' + id)
  }

  insertTheater(body:any){
    return this.http.post(API + '/theatres' , body)
  }

  deleteTheater(id:any){
    return this.http.delete(API + '/theatres/' + id)
  }

  updateTheater(id:any, body: any){
    return this.http.put(API + '/theatres/' + id, body)
  }

}
