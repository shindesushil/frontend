import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.authService.logout()
  }

}
