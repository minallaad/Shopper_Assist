import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Globals} from "../globals";

@Component({
  selector: 'app-confirmation-dialog-box',
  templateUrl: './confirmation-dialog-box.component.html',
  styleUrls: ['./confirmation-dialog-box.component.css']
})
export class ConfirmationDialogBoxComponent implements OnInit {


    loggedIn:boolean=false;
    constructor(
        public dialogRef: MatDialogRef<ConfirmationDialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,private globals: Globals) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit()
    {

        this.loggedIn = this.globals.loggedIn;

    }


}
