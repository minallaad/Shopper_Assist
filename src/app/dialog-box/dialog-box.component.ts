import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
@Component({
    selector: 'app-dialog-demo',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogBoxComponent>) { }

    onYesClick(): void {
        this.dialogRef.close(true);
    }
     ngOnInit()
     {

     }
}