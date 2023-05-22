import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/admin/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allMovies:any = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.allMovies = movies
      console.log(movies);
    })
  }

}
