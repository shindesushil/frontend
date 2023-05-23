import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/admin/movies.service';
import { ShowService } from 'src/app/services/admin/show.service';
import { TheaterService } from 'src/app/services/admin/theater.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { TicketService } from 'src/app/services/user/ticket.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  allTickets:any = []

  data:any = []

  constructor(
    private authService: AuthService,
    private ticketService: TicketService,
    private moviesService: MoviesService,
    private theaterService: TheaterService,
    private showService: ShowService
  ) { }

  ngOnInit(): void {
    this.ticketService.getTickets(this.authService.currentUser._id).subscribe((ticketsRes:any) => {
      console.log('Tickets: ', ticketsRes);
      this.allTickets = ticketsRes

      this.allTickets.map((ticket:any) => {
        let tempObj:any = new Object()

        tempObj['seats'] = ticket.numberOfSeats

        this.showService.getShow(ticket.showID).subscribe((showRes:any) => {

          console.log('Show Res: ', showRes);

          tempObj['timeSlot'] = this.tConvert(showRes.time_slot)
          

          this.moviesService.getMovie(showRes.movie_id).subscribe((movieRes:any) => {
            tempObj['movieName'] = movieRes.movieName
            tempObj['duration'] = movieRes.duration
            tempObj['language'] = movieRes.language
            tempObj['thumbnail'] = movieRes.thumbnail
  
            this.theaterService.getTheater(showRes.theatre_id).subscribe((theaterRes:any) => {
              tempObj['theaterName'] = theaterRes.theatreName
  
              this.data.push(tempObj)
  
            })
  
          })
  
        })

        })
        console.log('Data: ', this.data);

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
