import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheaterService } from 'src/app/services/admin/theater.service';


@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit, AfterViewInit {

  theaterName:string = ''
  metroLocation:string = ''
  district:string = ''
  shows:number = 0
  seatingCapacity: number = 0
  image: any = ''

  file:any = ''

  @Input() theater:any =''

  constructor(private theaterService: TheaterService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      if(this.theater){
        this.theaterName = this.theater.theatreName
        this.metroLocation = this.theater.metroLocation
        this.district = this.theater.district
        this.shows = this.theater.numberOfShows
        this.seatingCapacity = this.theater.seatingCapacity
        this.image = this.theater.image
      }
  }

  getFile(event:any){
    this.file = event.target.files[0]
    console.log(this.file);

    if(this.file.size > 70000){
      alert("Max size allowed is 70 KB")
      return
    }

    let _ = this

    let fileReader = new FileReader()
    fileReader.onload = function(fileLoadEvent){
      let srcData = fileLoadEvent.target?.result
      // console.log(srcData);
    
      _.image = srcData

    }

    fileReader.readAsDataURL(this.file)
    
  }

  handleSubmit(){
    let theater = {
      theatreName: this.theaterName,
      metroLocation: this.metroLocation,
      district: this.district,
      numberOfShows: this.shows,
      seatingCapacity: this.seatingCapacity,
      image: this.image
    }

    this.theaterService.insertTheater(theater).subscribe(val => {
      console.log('Theater Added: ', val);
      alert('Done')
      this.router.navigate(['admin', 'theaters'])
    })

  }

  handleUpdate(){
    let theater = {
      theatreName: this.theaterName,
      metroLocation: this.metroLocation,
      district: this.district,
      numberOfShows: this.shows,
      seatingCapacity: this.seatingCapacity,
      image: this.image
    }

    this.theaterService.updateTheater(this.theater._id, theater).subscribe(updated => {
      console.log('Updated: ', updated);
      alert('Done')
      this.router.navigate(['admin', 'theaters'])
    })

  }

}
