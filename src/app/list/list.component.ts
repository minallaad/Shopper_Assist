import { Component, OnInit ,OnDestroy} from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {Item} from "../Models/list.model";
import {userList} from "../Models/userList.model";
import { Globals } from '../globals';
import {SaveListdialogBoxComponent} from "../save-listdialog-box/save-listdialog-box.component";


// class Item{
//     public name:string;
//     public isPresent:boolean;
//
//     constructor(name: string , isPresent:boolean)
//     {
//         this.name = name;
//         this.isPresent =isPresent;
//     }
// }






@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer , private kafkaService: KafkaService,public snackBar: MatSnackBar,private  http:HttpClient,private dialog: MatDialog,private globals: Globals) {


      console.log(globals.usersList);

      iconRegistry.addSvgIcon(
          'add_user',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-group_add-24px.svg'));


      iconRegistry.addSvgIcon(
          'Save_list',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-save_alt-24px.svg'));

  }


  connection:any;
  list : Item[] = [];
  usersList: userList;
  room_shared = 0;
  loggedIn:boolean=false;


  ngOnInit() {
    console.log("in list");

      this.loggedIn=this.globals.loggedIn;

    if( this.globals.loggedIn &&this.globals.myUserName )
        this.kafkaService.addUser(this.globals.myUserName);




      this.connection = this.kafkaService.getMessage().subscribe(message =>{
        console.log(message);
        console.log(typeof message);

        if(message.toString().includes("wants to share"))
        {
           console.log(message);
        }
        else
        {
            this.list = JSON.parse(message.toString());
            console.log(this.list);
        }



    })
     console.log(this.connection);

     this.room_shared = parseInt(localStorage.getItem("room_shared"));

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
         const item = new Item(itemName , true,localStorage.getItem('username'));
         this.list.push(item);
         console.log(this.list);
     }
      this.kafkaService.sendMessage(this.list);


  }

    addNewUser() {




        const dialogRef = this.dialog.open(DialogBoxComponent,{
            width: '250px',
            height: '200px',

        });


        dialogRef.afterClosed().subscribe( (showSnackBar: boolean) => {
            console.log(this.globals.usersList);
            this.kafkaService.addToRoom(this.globals.usersList);
            console.log('closing');
        });


    }

    openDialog()
    {

        const dialogRef = this.dialog.open(SaveListdialogBoxComponent,{
            width: '250px',
            height: '200px',

        });


        dialogRef.afterClosed().subscribe( (showSnackBar: boolean) => {
          //  console.log(this.globals.usersList);
          //  this.kafkaService.addToRoom(this.globals.usersList);
          //  console.log('closing');
        });
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
