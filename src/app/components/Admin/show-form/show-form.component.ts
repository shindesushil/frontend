import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/admin/movies.service';
import { ShowService } from 'src/app/services/admin/show.service';
import { TheaterService } from 'src/app/services/admin/theater.service';

import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  movies:[any] = ['']
  theaters:[any] = ['']

  selectedMovie:any = ''
  selectedTheater:any = ''

  selectedMovieObj:any = ''
  selectedTheaterObj:any = ''

  timeSlot:string = ''
  price:number = 0

  @Input() show:any = ''

  constructor(
    private moviesService: MoviesService,
    private theatersService: TheaterService,
    private showsService: ShowService
  ) {  }

  ngOnInit(): void { 
    forkJoin(
      [
        this.moviesService.getAllMovies(), 
        this.theatersService.getAllTheaters()
      ]).subscribe((res:any) => {
        this.movies = res[0]
        this.theaters = res[1]


        // Set values if we are on update page
        if(this.show){
          this.selectedMovie = this.show.movie_id
          this.selectedTheater = this.show.theatre_id
          this.timeSlot = this.show.time_slot
          this.price = this.show.price_per_seat
          console.log('Loaded Show: ', this.show);
    
          // console.log('Selected Movie Object: ', this.selectedMovieObj);
          
          this.setSelectedMovie()
          this.setSelectedTheater()
          
        }

      })
   }

  setSelectedMovie(){
    this.selectedMovieObj = this.movies.filter(item => item._id === this.selectedMovie)[0]
  }

  setSelectedTheater(){
    this.selectedTheaterObj = this.theaters.filter(item => item._id === this.selectedTheater)[0]
  }

  handleCreate(){
    let show = {
      theatre_id: this.selectedTheaterObj._id,
      movie_id: this.selectedMovieObj._id,
      time_slot: this.timeSlot,
      price_per_seat: this.price,
      regular_seat_available: this.selectedTheaterObj.seatingCapacity
    }

    this.showsService.getShowsCount(show.theatre_id).subscribe((count:any) => {
      // console.log('Count: ',count);

      if(count < this.selectedTheaterObj.numberOfShows){
        this.showsService.createShow(show).subscribe((res:any) => {
          console.log('New Show: ', res);
          alert('Done')

          this.selectedMovie = ''
          this.selectedTheater = ''
          this.timeSlot = ''
          this.price = 0

          this.selectedMovieObj = ''
          this.selectedTheaterObj = ''

        })
      }
      else{
        alert(`This theater has only ${this.selectedTheaterObj.numberOfShows} shows and all are booked!`)
      }

    })
  }

  handleUpdate(){

    let show = {
      theatre_id: this.selectedTheaterObj._id,
      movie_id: this.selectedMovieObj._id,
      time_slot: this.timeSlot,
      price_per_seat: this.price,
      regular_seat_available: this.selectedTheaterObj.seatingCapacity
    }

    // If there is update in theater
    if(this.show.theatre_id !== this.selectedTheaterObj._id){
      this.showsService.getShowsCount(show.theatre_id).subscribe((count:any) => {
        if(count < this.selectedTheaterObj.numberOfShows){
          this.showsService.updateShow(this.show._id,show).subscribe((res:any) => {
            console.log('Updated Show: ', res);
            alert('Done')
          })
        }else{
          alert(`This theater has only ${this.selectedTheaterObj.numberOfShows} shows and all are booked!`)
        }
      })
    }else{
      this.showsService.updateShow(this.show._id,show).subscribe((res:any) => {
        console.log('Updated Show: ', res);
        alert('Done')
      })
    }
  }

}
