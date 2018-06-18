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
import {ConfirmationDialogBoxComponent} from "../confirmation-dialog-box/confirmation-dialog-box.component";


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
            'stop_sharing',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-stop-24px.svg'));


        iconRegistry.addSvgIcon(
            'ShareList',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-group-24px.svg'));

    }


    connection:any;
    list : Item[] = [];
    usersList: userList;
    users = [];
    consent : boolean;
    sharing_status: boolean = false;
    loading_icon :boolean = false;

    ngOnInit() {
        console.log("in list");



        this.connection = this.kafkaService.getMessage().subscribe(message =>{
            console.log(message.toString().includes("wants to share"));
            console.log(message);


            if(message.toString().includes("wants to share"))
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
                    console.log(data);
                    if(data)
                    {
                        this.globals.shared_status = true;
                        this.sharing_status = this.globals.shared_status;
                        this.loading_icon = this.globals.shared_status;
                        this.kafkaService.sendResponse(data);
                        const timer = parseInt(localStorage.getItem('Timer'),10);

                        setTimeout(function(){this.loading_icon = false;},timer);
                    }

                });
            }
            else
            {

                this.list = JSON.parse(message.toString());
                console.log(this.list);
            }



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

        if(this.globals.sharing_status || this.globals.shared_status)
        {
            this.kafkaService.sendMessage(this.list);

        }


    }

    addNewUser() {


        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '250px',
            height: '200px',
            data: {}

        });
        //const snack = this.snackBar.open('Snack bar open before dialog');
        const snack = this.snackBar.dismiss();


        dialogRef.afterClosed().subscribe( result=> {


            if (this.globals.sharing_status) {
                this.loading_icon = true;
                console.log(this.globals.usersList);

                this.kafkaService.checkRoom(this.globals.usersList).subscribe(message => {
                    console.log(message.toString());


                    // message.foreach(msg =>{
                    //
                    // });
                    //Array.from(message, x => x);
                    console.log(message);
                    console.log(JSON.stringify(message) !== JSON.stringify([]));
                    if (JSON.stringify(message) !== JSON.stringify([])) {
                        this.globals.usersList.users = message;

                        this.globals.sharing_status = true;
                        this.sharing_status = this.globals.sharing_status;
                        console.log("here");
                        this.loading_icon = false;
                        this.kafkaService.addToRoom(this.globals.usersList);


                        if (this.globals.usersList.users !== []) {
                            this.snackBar.open("List sharing started", " ", {
                                duration: 4000
                            });

                        }


                    }
                    else {
                        this.loading_icon = false;
                        this.globals.sharing_status = false;
                        this.globals.shared_status = false;
                        console.log("No one accepted your request");
                    }

                });


            }

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

        if(this.globals.sharing_status || this.globals.shared_status){
            this.kafkaService.sendMessage(this.list);
        }


        console.log(this.list);
    }


    stop_sharing()
    {
        console.log(this.globals.sharing_status);
        console.log(this.globals.shared_status);
        if(this.globals.sharing_status || this.globals.shared_status)
        {
            this.sharing_status = this.globals.sharing_status = this.globals.shared_status = false;
            this.kafkaService.stopSharing();
        }
    }

}
