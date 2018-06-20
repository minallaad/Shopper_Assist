import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { KafkaService} from "./services/kafka.services";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements  OnInit{
    profile:any;
    connection:any;
    consent: true;
    constructor(private auth: AuthService, private conn:KafkaService,public router: Router ){
        // Comment out this method call if using
        // hash-based routing
        // auth.handleAuthentication();

        // if(auth.isAuthenticated())
        // {
        //     // this.profile = JSON.parse(localStorage.getItem('profile'));
        //     // localStorage.setItem('username',this.profile.nickname);
        //     console.log(localStorage.getItem('username'));
        //     if(localStorage.getItem('username') !== null)
        //         this.connection = this.conn.addUser(localStorage.getItem('username'));
        // }

        //
        //localStorage.setItem('username',this.profile['username']);
        //console.log(this.profile.nickname);


        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }

    ngOnInit(){

       if(!this.auth.isAuthenticated())
           this.router.navigate(['/login']);
        else{

           console.log("in app component");
       }
    }





}
