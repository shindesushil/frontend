import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/admin/movies.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie_id:string = ''
  movie:any = ''

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { 
    this.route.params.subscribe(params => {
      this.movie_id = params.id

      this.moviesService.getMovie(this.movie_id).subscribe((movie) => {
        console.log(movie);
        this.movie = movie
      })

    })
  }

  ngOnInit(): void {
  }

}
