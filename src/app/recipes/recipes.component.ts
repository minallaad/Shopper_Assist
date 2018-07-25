import { Component, OnInit } from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import {Globals} from "../globals";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private kafkaService: KafkaService,private globals: Globals) { }

  loggedIn:boolean=false;
  ngOnInit() {

    this.loggedIn = this.globals.loggedIn;
    if(this.globals.myUserName)
      this.kafkaService.addUser(this.globals.myUserName);
  }

}
