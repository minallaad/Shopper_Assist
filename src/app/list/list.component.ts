import { Component, OnInit } from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { AuthService } from '../services/auth.service';
import { MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

class Item{
    public name:string;
    public isPresent:boolean;

    constructor(name: string , isPresent:boolean)
    {
        this.name = name;
        this.isPresent =isPresent;
    }
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer , private chartService: KafkaService,private  http:HttpClient,private auth: AuthService,public snackBar: MatSnackBar,private dialog: MatDialog) {
      // Comment out this method call if using
      // hash-based routing
      auth.handleAuthentication();

      iconRegistry.addSvgIcon(
          'add_user',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-group_add-24px.svg'));


      iconRegistry.addSvgIcon(
          'Save_list',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-save_alt-24px.svg'));

  }


  connection:any;
  list : Item[] = [];
  addUser:boolean;

  ngOnInit() {
    console.log("in list");
    this.connection = this.chartService.getMessage().subscribe(message =>{
        console.log(message);
        console.log(typeof message);

        this.list = JSON.parse(message.toString());
        console.log(this.list);

    })
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


     //https://friday-gclistings.localtunnel.me
    //this.http.post('http://35.233.233.84:8092/postData', JSON.stringify(this.list), {
   this.http.post('https://friday-gclistings.localtunnel.me/postData', JSON.stringify(this.list), {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
    })
    .subscribe(data => {
      console.log(data);
    });

  }

    addNewUser() {


        const dialogRef = this.dialog.open(DialogBoxComponent,{
            width: '250px',
            height: '200px'
        });
        //const snack = this.snackBar.open('Snack bar open before dialog');
        const snack = this.snackBar.dismiss();

        dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
            if (showSnackBar) {
                const a = document.createElement('a');
                a.click();
                a.remove();
                this.snackBar.open('User has been Added Successfully!', '', {
                    duration: 2000,
                });
            }
        });


    }

    openDialog()
    {

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

      this.http.post('https://friday-gclistings.localtunnel.me/postData', JSON.stringify(this.list), {
          headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
      })
          .subscribe(data => {
              console.log(data);
          });
      console.log(this.list);
  }

}
