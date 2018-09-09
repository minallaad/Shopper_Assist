import { Component, OnInit } from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import {Router} from "@angular/router";
import {Globals} from "../globals";
import {LoginService} from "../services/login.service";
import {FormControl, Validators} from '@angular/forms';
import {User} from "../Models/user.model";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connection:any;
  signup:boolean =false;
  error:string;
  errorStatus:boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  userList:User[]=[];
  constructor( private conn:KafkaService,public router: Router,private globals: Globals ,private loginService:LoginService) { }

  ngOnInit() {
  }

  SignUp(username,password,email,confirmpassword){
    this.errorStatus=false;
    console.log('userame = '+username + ' password =' +password+ ' email =' +email +' confirm = '+ confirmpassword);

    if(isNullOrUndefined(username) || username === '')
    {
        this.errorStatus = true ;
        this.error = 'Username is required. Please enter username';
    }
    else if(isNullOrUndefined(email) || email === '')
      {
          this.errorStatus = true ;
          this.error = 'Email is required. Please enter email';
      }
    //   else if (email !== '' )
    // {
    //     this.errorStatus = true ;
    //     this.error = 'Invalid email. Please enter again.';
    // }
      else if(isNullOrUndefined(password) || password === '')
      {
          this.errorStatus = true ;
          this.error = 'Password is required. Please enter password';
      }
      else if(isNullOrUndefined(confirmpassword) || confirmpassword === '')
      {
          this.errorStatus = true ;
          this.error = 'ConfirmPassword is required. Please enter confirmPassword';
      }
      else if (password !== confirmpassword){
        this.errorStatus = true ;
        this.error = 'Password and ConfirmPassword does not match.';
    }
    else{
        if(username && password && email && password === confirmpassword)
        {
            console.log("Inside signup");
            this.loginService.SignUp(username, password, email,confirmpassword).subscribe((data) => {
                console.log(data);
                console.log("sign up successfully");
                this.signup=false;
            },(error)=>{
                console.log(error);

                if (error['status'] === 400) {
                    localStorage.clear();
                    this.errorStatus=true;
                    this.error = "Username is already taken. Please enter unique username."

                }

            });
        }
    }
  }


  login(username,password){
    console.log(username );
    this.errorStatus = false;

      if(isNullOrUndefined(username) || username === '')
      {
          this.errorStatus = true ;
          this.error = 'Username is required. Please enter username';
      }
      else if(isNullOrUndefined(password) || password === '')
      {
          this.errorStatus = true ;
          this.error = 'Password is required. Please enter password';
      }

      else{


          if(username && password)
          {
              this.loginService.login(username,password).subscribe((data) => {
                      // console.log(data['token']);
                      localStorage.setItem('access_token',data['token']);
                      const userDetail = JSON.parse(atob(data['token'].split(".")[1]));
                      localStorage.setItem('username',userDetail.data['username']);
                      localStorage.setItem('email',userDetail.data['email']);
                      this.globals.myUserName = userDetail.data['username'];
                      console.log(data);
                      this.router.navigate(['/list']);

                  },
                  (error)=>{
                      if (error['status'] === 401) {
                          localStorage.clear();
                          this.errorStatus = true;
                          this.error = 'Invalid Password or Username';
                          this.router.navigate(['/login']);
                      }

                  });
          }



      }


  }

}
