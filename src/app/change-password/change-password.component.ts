import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {Globals} from "../globals";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  error:boolean=false;
  hide:boolean=true;
  constructor(public router: Router,private globals: Globals ,private loginService:LoginService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


    ChangePassword(oldPassword,newPassword,confirmPassword)
    {
      if(oldPassword != null && newPassword!= null && newPassword === confirmPassword)
      {
          this.loginService.changePassword(oldPassword,newPassword).subscribe(response =>{
              console.log("Password Changed Successfully");
              this.snackBar.open("Password Changed Successfully!!", "Okay ").onAction().subscribe(() => {
                  this.loginService.logout();
              });;
          },(error =>{

                this.error = true;
          }));


      }

    }
}
