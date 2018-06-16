import { Component, OnInit ,OnDestroy} from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { AuthService } from '../services/auth.service';
import { MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {Item} from "../Models/list.model";
import {userList} from "../Models/userList.model";
import { Globals } from '../globals';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer , private kafkaService: KafkaService,private  http:HttpClient,private auth: AuthService,public snackBar: MatSnackBar,private dialog: MatDialog,private globals: Globals) {
      // Comment out this method call if using
      // hash-based routing
      auth.handleAuthentication();
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


  ngOnInit() {
    console.log("in list");
    this.connection = this.kafkaService.getMessage().subscribe(message =>{
        console.log(message);
        console.log(typeof message);

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
            //     this.usersList = this.globals.usersList;
            //     //Calling Kafka services for socket connection here
            this.kafkaService.addToRoom(this.globals.usersList);
            console.log('closing');
            // if (showSnackBar) {
            //     const a = document.createElement('a');
            //     a.click();
            //     a.remove();
            //     this.snackBar.open('User has been Added Successfully!', '', {
            //         duration: 2000,
            //     });
            // }
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
