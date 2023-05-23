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
import { SigninComponent } from './components/User/signin/signin.component';
import { AdminGuardService } from './services/user/admin-guard.service';
import { MoviesComponent } from './components/User/movies/movies.component';
import { BookTicketComponent } from './components/User/book-ticket/book-ticket.component';
import { MyTicketsComponent } from './components/User/my-tickets/my-tickets.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/book/:id', component:BookTicketComponent},
  {path: 'my-tickets', component: MyTicketsComponent},
  {
    path:'admin', 
    component:AdminDashboardComponent,
    canActivate:[AdminGuardService],
    children: [
      {path:"", component:AdminHomeComponent, canActivateChild:[AdminGuardService]},
      {path:'movies', component:MoviesAdminComponent, canActivateChild:[AdminGuardService]},
      {path:'movies/add', component:AddMovieComponent, canActivateChild:[AdminGuardService]},
      {path: 'movies/edit/:id', component:UpdateMovieComponent, canActivateChild:[AdminGuardService]},
      {path: 'theaters', component: TheaterAdminComponent},
      {path:'theaters/add', component:AddTheaterComponent},
      {path:'theaters/edit/:id', component:UpdateTheaterComponent, canActivateChild:[AdminGuardService]},
      {path: 'shows', component:ShowsAdminComponent, canActivateChild:[AdminGuardService]},
      {path: 'shows/add', component: AddShowsComponent, canActivateChild:[AdminGuardService]},
      {path:'shows/edit/:id', component:UpdateShowComponent, canActivateChild:[AdminGuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
