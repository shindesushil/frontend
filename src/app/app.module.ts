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
    TheaterFormComponent
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
