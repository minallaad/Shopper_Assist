import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { KafkaService} from "./services/kafka.services";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

import {Globals} from "./globals";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements  OnInit{
    profile:any;
    connection:any;
    consent: true;

    loggedIn:boolean=false;
    constructor(private conn:KafkaService,private loginService:LoginService,public router: Router,private globals: Globals ){
    }

    ngOnInit() {



        // this.authService.authState.subscribe((user) => {
        //     this.user = user;
        //     this.loggedIn = (user != null);
        //     this.globals.loggedIn=this.loggedIn;
        //
        // });

        console.log(this.globals.loggedIn);
        if(this.loginService.loggedIn())
        {
           // this.globals.myUserName = this.user.firstName;
            this.conn.addUser(this.globals.myUserName);
            this.router.navigate(['/list']);
        }
        else if(!this.loginService.loggedIn())
            this.router.navigate(['/login']);
    }




}
