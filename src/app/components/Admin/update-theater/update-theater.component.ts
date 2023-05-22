import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from 'src/app/services/admin/theater.service';

@Component({
  selector: 'app-update-theater',
  templateUrl: './update-theater.component.html',
  styleUrls: ['./update-theater.component.css']
})
export class UpdateTheaterComponent implements OnInit {

  theater:any = ''

  constructor(private theaterService: TheaterService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.theaterService.getTheater(params.id).subscribe(theater => {
        this.theater = theater
        console.log('to update : ', theater);
      })
    })
   }

  ngOnInit(): void {
  }

  handleUpdate(id:any){
      this.theaterService.getTheater(id).subscribe(theater => {
    })
  }
}
