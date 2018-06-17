import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  Messages = [];
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private  http:HttpClient,private auth: AuthService) {


      auth.handleAuthentication();
      iconRegistry.addSvgIcon(
          'Similey',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-insert_emoticon-24px.svg'));


  }

  ngOnInit() {
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
