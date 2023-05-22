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
import { UpdateTheaterComponent } from './components/Admin/update-theater/update-theater.component';
import { ShowsAdminComponent } from './components/Admin/shows-admin/shows-admin.component';
import { AddShowsComponent } from './components/Admin/add-shows/add-shows.component';
import { UpdateShowComponent } from './components/Admin/update-show/update-show.component';
import { SignupComponent } from './components/User/signup/signup.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'signup', component: SignupComponent},
  {
    path:'admin', 
    component:AdminDashboardComponent,
    children: [
      {path:"", component:AdminHomeComponent},
      {path:'movies', component:MoviesAdminComponent},
      {path:'movies/add', component:AddMovieComponent},
      {path: 'movies/edit/:id', component:UpdateMovieComponent},
      {path: 'theaters', component: TheaterAdminComponent},
      {path:'theaters/add', component:AddTheaterComponent},
      {path:'theaters/edit/:id', component:UpdateTheaterComponent},
      {path: 'shows', component:ShowsAdminComponent},
      {path: 'shows/add', component: AddShowsComponent},
      {path:'shows/edit/:id', component:UpdateShowComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
