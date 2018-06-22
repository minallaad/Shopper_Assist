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
    }

    ngOnInit(){

       if(!this.auth.isAuthenticated())
           this.router.navigate(['/login']);
    }





}
