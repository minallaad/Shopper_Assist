import { Component, OnInit } from '@angular/core';
import {KafkaService} from "../services/kafka.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Item } from 'list.component.spec';
import { AuthService } from '../services/auth.service';

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

  constructor(private chartService: KafkaService,private  http:HttpClient,private auth: AuthService) {
      // Comment out this method call if using
      // hash-based routing
      auth.handleAuthentication();

      // Uncomment this method call if using
      // hash-based routing
      // auth.handleAuthenticationWithHash();
  }

  connection:any;
  list : Item[] = [];
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


    this.http.post('http://35.233.233.84:8092/postData', JSON.stringify(this.list), {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
    })
    .subscribe(data => {
      console.log(data);
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
          }


      }
      console.log(this.list);
  }

}
