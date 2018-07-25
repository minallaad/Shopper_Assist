import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {KafkaService} from "../services/kafka.services";
import {Globals} from "../globals";

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  Messages = [];
  loggedIn:boolean=false;
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private  http:HttpClient,private kafkaService: KafkaService,private globals: Globals) {



      iconRegistry.addSvgIcon(
          'Similey',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-insert_emoticon-24px.svg'));


  }

  ngOnInit() {

      this.loggedIn = this.globals.loggedIn;
      if(this.globals.myUserName)
        this.kafkaService.addUser(this.globals.myUserName);
  }
    sendMessage(message :string)
    {
      this.Messages.push(message);
        // this.http.post('http://localhost:8092/postMessage', JSON.stringify(this.Messages), {
        //     headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
        // })
        //     .subscribe(data => {
        //         console.log(data);
        //     });
    }

}
