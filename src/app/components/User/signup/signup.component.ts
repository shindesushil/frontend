import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string = ''
  email:string = ''
  password:string = ''
  cpassword:string = ''

  patternEmail:any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  patternPassword:any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  handleSignup(){
    let user ={
      username: this.username,
      email: this.email,
      password: this.password
    }

    this.authService.signUp(user).subscribe((res:any) => {
      alert('Registration Successfull!')
      console.log('New User: ', res);
      
      this.username = ''
      this.email = ''
      this.password = ''
      this.cpassword = ''
    })

  }

}
