import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/admin/movies.service';
import { ShowService } from 'src/app/services/admin/show.service';
import { TheaterService } from 'src/app/services/admin/theater.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { TicketService } from 'src/app/services/user/ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  movie:any = ''
  shows:any = ''

  showsData:any = []

  selectedShow:any = ''
  noOfSeats:number = 1

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService,
    private showService: ShowService,
    private theaterService:TheaterService,
    private ticketService: TicketService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      console.log('id: ', params.id);
      
      
      this.moviesService.getMovie(params.id).subscribe((res:any) => {
        this.movie = res

        this.showService.getAllShows().subscribe((allShows:any) => {

          this.shows = allShows.filter((item:any) => item.movie_id === this.movie._id)

          console.log('filtered: ', this.shows);
          

          let tempObj:any = new Object()

          this.shows.map((item:any) => {

            tempObj[item.theatre_id] = new Object()
            tempObj[item.theatre_id]['shows'] = []
            tempObj[item.theatre_id]['_id'] = item.theatre_id            

            this.theaterService.getTheater(item.theatre_id).subscribe((t:any) => {

              // tempObj['theater_id'] = item.theatre_id
              tempObj[item.theatre_id]['theaterName'] = t.theatreName
              tempObj[item.theatre_id]['theaterMetroLocation'] = t.metroLocation
              tempObj[item.theatre_id]['theaterDistrict'] = t.district

              tempObj[item.theatre_id]['shows'].push({
                  timeSlot: this.tConvert(item.time_slot),
                  pricePerSeat: item.price_per_seat,
                  showID: item._id
                }
              ) 

            })

          })

          for(const property in tempObj){
            this.showsData.push(tempObj[property])
            console.log('Prop: ', tempObj[property]);
          }
          console.log('Shows: ', this.showsData);
        })

      })

    })
  }


  setSelectedShow(id:any){
    this.selectedShow = this.shows.filter((item:any) => item._id === id)[0]
    console.log(this.selectedShow);
    
  }

  handlePayment(){

    let ticket = {
      showID: this.selectedShow._id,
      userID: this.authService.currentUser._id,
      numberOfSeats: this.noOfSeats,
      totalAmount: this.selectedShow.price_per_seat * this.noOfSeats
    }

    // console.log(ticket);

    this.ticketService.bookTicket(ticket).subscribe((res:any) => {
      console.log('Ticket Booked: ', res);
      alert('Booking Successfull!')
      this.router.navigate(['/my-tickets'])
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
