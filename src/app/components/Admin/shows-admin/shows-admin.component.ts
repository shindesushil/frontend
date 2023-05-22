import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/admin/movies.service';
import { ShowService } from 'src/app/services/admin/show.service';
import { TheaterService } from 'src/app/services/admin/theater.service';

import {forkJoin} from 'rxjs'

@Component({
  selector: 'app-shows-admin',
  templateUrl: './shows-admin.component.html',
  styleUrls: ['./shows-admin.component.css']
})
export class ShowsAdminComponent implements OnInit {

  allMovies:any = []
  allTheaters:any = []
  allShows:any = []

  data:any = []

  constructor(
    private moviesService: MoviesService,
    private theaterService: TheaterService,
    private showService: ShowService
  ) { 
    
   }

  ngOnInit(): void {

    forkJoin(
      [ 
        this.moviesService.getAllMovies(), 
        this.theaterService.getAllTheaters(),
        this.showService.getAllShows()
      ]
    ).subscribe((res) => {
      this.allMovies = res[0]
      this.allTheaters = res[1]
      this.allShows = res[2]

      // console.log('Movies : ', this.allMovies);
      // console.log('Theaters : ', this.allTheaters);
      // console.log('Shows : ', this.allShows);


      this.allShows.forEach((show:any) => {

        let tempObj:any = new Object()

        tempObj['_id'] = show._id

        tempObj['timeSlot'] = this.tConvert(show.time_slot)
        tempObj['pricePerSeat'] = show.price_per_seat

        tempObj['movieName'] = this.allMovies.filter((item:any) => item._id === show.movie_id)[0].movieName
        tempObj['theaterName'] = this.allTheaters.filter((item:any) => item._id === show.theatre_id)[0].theatreName


        this.data.push(tempObj)
        
      });

      // console.log('Data: ', this.data);

    })

  }

  handleDelete(id:any){
    this.showService.deleteShow(id).subscribe((deletedShow:any) => {
      this.data = this.data.filter((item:any) => item._id !== deletedShow._id)
    })
  }

  tConvert (time:any) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }


}
