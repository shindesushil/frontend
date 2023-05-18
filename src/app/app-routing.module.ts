import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { MoviesAdminComponent } from './components/Admin/movies-admin/movies-admin.component';
import { TheaterAdminComponent } from './components/Admin/theater-admin/theater-admin.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { AddMovieComponent } from './components/Admin/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/Admin/update-movie/update-movie.component';
import { AddTheaterComponent } from './components/Admin/add-theater/add-theater.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {
    path:'admin', 
    component:AdminDashboardComponent,
    children: [
      {path:"", component:AdminHomeComponent},
      {path:'movies', component:MoviesAdminComponent},
      {path:'movies/add', component:AddMovieComponent},
      {path: 'movies/:id', component:UpdateMovieComponent},
      {path: 'theaters', component: TheaterAdminComponent},
      {path:'theaters/add', component:AddTheaterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
