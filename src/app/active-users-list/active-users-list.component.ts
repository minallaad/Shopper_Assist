import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';
import { Globals } from '../globals';
import {KafkaService} from "../services/kafka.services";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-active-users-list',
  templateUrl: './active-users-list.component.html',
  styleUrls: ['./active-users-list.component.css']
})
export class ActiveUsersListComponent implements OnInit {


  users:any;
  sharing_status: boolean = false;
  shared_status : boolean = false;
  username: string;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private bottomSheetRef: MatBottomSheetRef<ActiveUsersListComponent> , private globals: Globals,private kafkaService: KafkaService) {
      iconRegistry.addSvgIcon(
          'remove',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/outline-close-24px.svg'));


  }

    RemoveUser(user:string)
    {
        console.log("user has been removed");

    }
  ngOnInit() {

      console.log(this.globals.usersList);

     if(this.globals.sharing_status){
         console.log("In sharing status");
          this.sharing_status =  this.globals.sharing_status;
          this.sharing_status = false;
          this.users = this.globals.usersList.users;
          console.log(typeof  this.globals.usersList.users);
          console.log(this.globals.usersList.users);
      }
      else if (this.globals.shared_status)
      {
          console.log("In shared status");
          this.shared_status = true;
          this.username = this.globals.username;
      }
      else{
             this.sharing_status = false;
             this.shared_status = false;
         }

   // this.users = this.globals.usersList.users;


  }


}
