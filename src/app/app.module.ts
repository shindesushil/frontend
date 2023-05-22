import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { MoviesAdminComponent } from './components/Admin/movies-admin/movies-admin.component';
import { TheaterAdminComponent } from './components/Admin/theater-admin/theater-admin.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { AddMovieComponent } from './components/Admin/add-movie/add-movie.component';
import { MovieFormComponent } from './components/Admin/movie-form/movie-form.component';
import { UpdateMovieComponent } from './components/Admin/update-movie/update-movie.component';
import { AddTheaterComponent } from './components/Admin/add-theater/add-theater.component';
import { TheaterFormComponent } from './components/Admin/theater-form/theater-form.component';
import { UpdateTheaterComponent } from './components/Admin/update-theater/update-theater.component';
import { ShowsAdminComponent } from './components/Admin/shows-admin/shows-admin.component';
import { AddShowsComponent } from './components/Admin/add-shows/add-shows.component';
import { ShowFormComponent } from './components/Admin/show-form/show-form.component';
import { UpdateShowComponent } from './components/Admin/update-show/update-show.component';
import { SignupComponent } from './components/User/signup/signup.component';
import { SigninComponent } from './components/User/signin/signin.component';
import { MoviesComponent } from './components/User/movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminDashboardComponent,
    MoviesAdminComponent,
    TheaterAdminComponent,
    AdminHomeComponent,
    AddMovieComponent,
    MovieFormComponent,
    UpdateMovieComponent,
    AddTheaterComponent,
    TheaterFormComponent,
    UpdateTheaterComponent,
    ShowsAdminComponent,
    AddShowsComponent,
    ShowFormComponent,
    UpdateShowComponent,
    SignupComponent,
    SigninComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
