import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string = ''
  password:string = ''

  patternEmail:any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignin(){

    let body = {
      email: this.email,
      password: this.password
    }

    this.authService.login(body).subscribe((res:any) => {
      // console.log('Token: ', res);
      localStorage.setItem('sessionToken', JSON.stringify(res))
      this.authService.currentUser = {
        email: res.email,
        username: res.username,
        _id: res._id
      }

      console.log('Current: ', this.authService.currentUser);

      this.router.navigate(['/'])
      
    
    }, error => {
      console.log('Error: ', error);
      alert('Invalid Email or Password!')
    })

  }

}
