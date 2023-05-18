import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/services/admin/theater.service';

@Component({
  selector: 'app-theater-admin',
  templateUrl: './theater-admin.component.html',
  styleUrls: ['./theater-admin.component.css']
})
export class TheaterAdminComponent implements OnInit {

  allTheaters:any = []

  constructor(private theaterService: TheaterService) { 
    theaterService.getAllTheaters().subscribe(data => {
      this.allTheaters = data
      console.log(this.allTheaters);
      
    })
  }

  ngOnInit(): void {
  }

  handleDelete(id:any){
    if(confirm("Are you sure?")){
      this.theaterService.deleteTheater(id).subscribe((deleted:any) => {
        console.log('Deleted: ', deleted);
        this.allTheaters = this.allTheaters.filter((item:any) => item._id !== deleted._id)
      })
    }
  }

}
