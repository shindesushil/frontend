import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/admin/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, AfterViewInit {


  movieName: string = ''
  language: string = ''
  duration: [number, number] = [0,0]
  thumbnail: any = ''
  file:any = ''

  @Input('movie') sourceData:any = ''

  constructor(private moviesService: MoviesService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.sourceData){
      this.movieName = this.sourceData.movieName
      this.language = this.sourceData.language
      this.duration = [this.sourceData.duration.split(" ")[0], this.sourceData.duration.split(" ")[2]]
      this.thumbnail = this.sourceData.thumbnail
    }
  }

  handleSubmit(){
    // console.log(this.thumbnail);
    
    let movie = {
      movieName: this.movieName,
      language: this.language,
      duration: this.duration[0] +" hours " + this.duration[1] + " minutes",
      thumbnail: this.thumbnail
    }

    // console.log(movie);

    this.moviesService.insertMovie(movie).subscribe(val => {
      console.log("Inserted Movie: " + val);
      alert('Done')
      
      this.movieName = ''
      this.duration = [0,0]
      this.language = ''
      this.thumbnail = ''
      this.file = ''


    })
    

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
    
      _.thumbnail = srcData

    }

    fileReader.readAsDataURL(this.file)
    
  }

  handleUpdate(){
    let movie = {
      movieName: this.movieName,
      language: this.language,
      duration: this.duration[0] +" hours " + this.duration[1] + " minutes",
      thumbnail: this.thumbnail
    }
    this.moviesService.updateMovie(this.sourceData._id, movie).subscribe(updatedMovie => {
      console.log('Updated: ', updatedMovie);
      alert('Movie Updated!!!')
      this.router.navigate(['admin/movies'])
    })
  }

}
