import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import {KafkaService} from "../services/kafka.services";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {userList} from "../Models/userList.model";
import {AuthService} from "../services/auth.service";
import {Item} from "../Models/list.model";
import {DomSanitizer} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Globals} from "../globals";
import {MatBottomSheet} from '@angular/material';
import {ActiveUsersListComponent} from "../active-users-list/active-users-list.component";


;


@Component({
  selector: 'app-shared-lists',
  templateUrl: './shared-lists.component.html',
  styleUrls: ['./shared-lists.component.css']
})
export class SharedListsComponent implements OnInit {


    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer , private bottomSheet: MatBottomSheet, private kafkaService: KafkaService,private  http:HttpClient,private auth: AuthService,public snackBar: MatSnackBar,private dialog: MatDialog,private globals: Globals) {
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();
        console.log(globals.usersList);

        iconRegistry.addSvgIcon(
            'add_user',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-person_add-24px.svg'));


        iconRegistry.addSvgIcon(
            'ShareList',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-group-24px.svg'));

    }


    connection:any;
    list : Item[] = [];
    usersList: userList;
    consent : boolean;


    ngOnInit() {
        console.log("in list");

        this.connection = this.kafkaService.getMessage().subscribe(message =>{
            console.log(message);


                this.list = JSON.parse(message.toString());
                console.log(this.list);


        })
    }


    ngOnDestroy(){
        console.log("List destroyed");
    }


    addItemtoList(itemName:string)
    {
        var flag = 0;



        for(let i in this.list)
        {
            console.log(this.list[i].name);
            if(this.list[i].name === itemName) {
                this.list[i].isPresent = true;
                flag = 1;
            }
        }

        if( flag === 0)
        {
            const item = new Item(itemName , true);
            this.list.push(item);
            console.log(this.list);
        }
        this.kafkaService.sendMessage(this.list);


        //
        // this.http.post('http://localhost:8092/postData', JSON.stringify(this.list), {
        //
        //   headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
        // })
        // .subscribe(data => {
        //   console.log(data);
        // });

        //
        // if (itemName) {
        //     itemName = '';
        // }

    }

    addNewUser() {




        const dialogRef = this.dialog.open(DialogBoxComponent,{
            width: '250px',
            height: '200px',

        });
        //const snack = this.snackBar.open('Snack bar open before dialog');
        const snack = this.snackBar.dismiss();


        dialogRef.afterClosed().subscribe( (showSnackBar: boolean) => {
            console.log(this.globals.usersList);

            this.kafkaService.checkRoom(this.globals.usersList).subscribe(message =>
            {
                console.log(message);
            //     this.globals.usersList.users = message;
            // if(this.globals.usersList.users != undefined && this.globals.usersList.users.length != 0)
            // {
            //     this.kafkaService.addToRoom(this.globals.usersList);
            // }
            // else{
            //     console.log("No one accepted your request");
            // }

        })
            //     this.usersList = this.globals.usersList;
            //     //Calling Kafka services for socket connection here



        });


    }

    openDialog()
    {
        this.bottomSheet.open(ActiveUsersListComponent);
    }

    removeFromlist(item:string)
    {
        console.log(item);
        for(let i in this.list)
        {
            console.log(this.list[i].name);
            if(this.list[i].name === item) {
                this.list[i].isPresent = false;
                console.log(this.list[i].isPresent);
                break;
            }


        }

        this.kafkaService.sendMessage(this.list);

        // this.http.post('http://localhost:8092/postData', JSON.stringify(this.list), {
        //     headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
        // })
        //     .subscribe(data => {
        //         console.log(data);
        //     });
        console.log(this.list);
    }

}
