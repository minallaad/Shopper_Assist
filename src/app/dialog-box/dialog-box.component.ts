import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatChipInputEvent} from "@angular/material/typings/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import { Globals } from '../globals';



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

    constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<DialogBoxComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,private globals: Globals) {
        this.username =localStorage.getItem('username');


        iconRegistry.addSvgIcon(
            'close',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/outline-close-24px.svg'));


        iconRegistry.addSvgIcon(
            'add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/outline-add-24px.svg'));
    }

    Confirm() {

        var usersListHere = new userList(this.username,this.users);
        this.usersList = usersListHere;

       // this.globals.usersList = JSON.stringify(this.usersList);
        this.globals.usersList = this.usersList;
        // console.log(usersList);
        console.log(typeof  this.globals.usersList);
        console.log(this.globals.usersList);
        this.dialogRef.close();
    }
     ngOnInit()
     {
            // this.users = this.data.users;
     }
    // Confirm()
    // {
    //     const username =localStorage.getItem('username');
    //     const usersList = new userList(username,this.users);
    //
    //
    // }

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];



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