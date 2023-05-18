import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/services/admin/theater.service';


@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit {

  theaterName:string = ''
  metroLocation:string = ''
  district:string = ''
  shows:number = 0
  seatingCapacity: number = 0
  image: any = ''

  file:any = ''

  constructor(private theaterService: TheaterService) { }

  ngOnInit(): void {
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
      
    })

  }

}
