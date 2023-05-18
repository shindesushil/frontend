import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/admin/movies.service';

@Component({
  selector: 'app-movies-admin',
  templateUrl: './movies-admin.component.html',
  styleUrls: ['./movies-admin.component.css']
})
export class MoviesAdminComponent implements OnInit {

  constructor(private moviesService: MoviesService, public router: Router) { }

  allMovies:any = []

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.allMovies = movies
      console.log(movies);
    })
  }

  handleDelete(id:string){
    // console.log(id);
    
    if(confirm("Delete the Movie?")){
      this.moviesService.deleteMovie(id).subscribe((deleted:any) => {
        console.log('Deleted: ', deleted);
        this.allMovies = this.allMovies.filter((item:any) => item.movie_id !== deleted.movie_id)
      })
    }
  }


}
