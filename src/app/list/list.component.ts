import { Component, OnInit } from '@angular/core';
import {ChartService} from "../chart.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from  '/home/minal/Documents/grocery_assisst/src/app/list/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private chartService: ChartService,private  http:HttpClient) { }

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


    this.http.post('http://localhost:8092/postData', JSON.stringify(this.list), {
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
