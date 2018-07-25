import { Component, OnInit } from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import {Globals} from "../globals";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private kafkaService: KafkaService,private globals: Globals) { }

  loggedIn:boolean=false;
  ngOnInit() {

      this.loggedIn = this.globals.loggedIn;
      if(this.globals.loggedIn && this.globals.myUserName)
          this.kafkaService.addUser(this.globals.myUserName);
  }

}
