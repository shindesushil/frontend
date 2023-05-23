import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/admin/movies.service';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allMovies:any = []

  constructor(private moviesService: MoviesService, public authService: AuthService) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.allMovies = movies
      console.log(movies);
    })
  }

}
