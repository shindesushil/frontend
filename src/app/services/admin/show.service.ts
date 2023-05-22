import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../constants'

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getAllShows(){
    return this.http.get(API + '/shows')
  }

  getShow(id:any){
    return this.http.get(API + '/shows/' + id)
  }

  getShowsCount(theaterID:any){
    return this.http.get(API + '/shows/count/' + theaterID)
  }

  createShow(body:any){
    return this.http.post(API + '/shows', body)
  }

  updateShow(id:any, body:any){
    return this.http.put(API + '/shows/' + id , body)
  }

  deleteShow(id:any){
    return this.http.delete(API + '/shows/' + id)
  }

}
