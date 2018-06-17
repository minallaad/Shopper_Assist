import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';
import { Globals } from '../globals';
import {KafkaService} from "../services/kafka.services";

@Component({
  selector: 'app-active-users-list',
  templateUrl: './active-users-list.component.html',
  styleUrls: ['./active-users-list.component.css']
})
export class ActiveUsersListComponent implements OnInit {


  users= [];
  constructor(private bottomSheetRef: MatBottomSheetRef<ActiveUsersListComponent> , private globals: Globals,private kafkaService: KafkaService) {
  }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
  ngOnInit() {

    console.log(typeof  this.globals.usersList.users);
    console.log(this.globals.usersList.users);
   // this.users = this.globals.usersList.users;


  }

  stop_sharing()
  {
      this.kafkaService.stopSharing();
  }

}
