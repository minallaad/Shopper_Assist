import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatChipInputEvent} from "@angular/material/typings/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import { Globals } from '../globals';
import {MatSnackBar} from '@angular/material';
import {KafkaService} from "../services/kafka.services";


class userList{
    public userName:string;
    public users = [];

    constructor(userName: string , users:any)
    {
        this.userName = userName;
        this.users =users;
    }
}


@Component({
    selector: 'app-dialog-demo',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

    username :string;
    users = [];
    private usersList : userList;
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<DialogBoxComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,private globals: Globals,public snackBar: MatSnackBar,private kafkaService: KafkaService) {
        this.username =localStorage.getItem('username');


        iconRegistry.addSvgIcon(
            'close',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/outline-close-24px.svg'));


        iconRegistry.addSvgIcon(
            'add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/outline-add-24px.svg'));
    }

    Confirm() {

        if(this.users.length === 0 )
        {
                this.snackBar.open("Please Enter at least one username", "Okay" , {

                    duration:4000
                });

        }
        else{
            console.log(this.globals.usersList);
            var usersListHere = new userList(this.username,this.users);
            this.usersList = usersListHere;
            this.globals.usersList = this.usersList;
            this.globals.sharing_status = true;


        }



        this.dialogRef.close();
    }
     ngOnInit()
     {



     }




    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our fruit
        if ((value || '').trim()) {

            this.users.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(user: any): void {
        let index = this.users.indexOf(user);

        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }

}