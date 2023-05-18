import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../constants'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpService: HttpClient) { }

  getAllMovies(){
    return this.httpService.get(API + '/movies')
  }

  getMovie(id:string){
    let params = new HttpParams()
    params = params.append("id", id)
    return this.httpService.get(API + '/movies/' + id)
  }

  insertMovie(movie: any){
    console.log('In Service:', movie);
    console.log(API);
    
    return this.httpService.post(API + '/movies', movie)
  }

  updateMovie(id:any, body:any){
    let queryParams = new HttpParams()
    queryParams = queryParams.append("id", id)
    return this.httpService.put(API + '/movies/' + id , body)
  }

  deleteMovie(id:string){
    return this.httpService.delete(API + '/movies/' + id)
  }

}
