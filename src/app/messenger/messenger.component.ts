import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  Messages = [];
  constructor(private  http:HttpClient) { }

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
