import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { KafkaService} from "./services/kafka.services";
import {ConfirmationDialogBoxComponent} from "./confirmation-dialog-box/confirmation-dialog-box.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements  OnInit{
    profile:any;
    connection:any;
    consent: true;
    constructor(private auth: AuthService, private conn:KafkaService,private dialog: MatDialog) {
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();


        if(auth.isAuthenticated())
        {
            // this.profile = JSON.parse(localStorage.getItem('profile'));
            // localStorage.setItem('username',this.profile.nickname);
            this.connection = this.conn.addUser(localStorage.getItem('username'));
        }
        //
        //localStorage.setItem('username',this.profile['username']);
        //console.log(this.profile.nickname);


        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }

    ngOnInit(){


        this.connection = this.conn.checkRequest().subscribe(message  => {



            if(message.toString().includes(" wants to share list."))
            {
                console.log(message);
                console.log("in dialog");

                const dialogRef = this.dialog.open(ConfirmationDialogBoxComponent,{
                    width: '250px',
                    height: '200px',
                    data:{consent : this.consent , message: message}

                });
                //const snack = this.snackBar.open('Snack bar open before dialog');


                dialogRef.afterClosed().subscribe( data => {
                    console.log(data.consent);
                    this.conn.sendResponse(data.consent);
                });
            }
        })



    }




}
