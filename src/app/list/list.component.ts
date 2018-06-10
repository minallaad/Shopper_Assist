import { Component, OnInit } from '@angular/core';
import {ChartService} from "../chart.services";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private chartService: ChartService,private  http:HttpClient) { }

  connection:any;
  list =[];
  ngOnInit() {
    console.log("in list");
    // this.connection = this.chartService.getMessage().subscribe(message =>{
    //     console.log(message);
    //     console.log(typeof  message);
    //     this.list = message.toString().split(',');
    // })
  }
  addItemtoList(item:string)
  {
    this.list.push(item);
    this.http.post('http://localhost:8092/postData', JSON.stringify(this.list), {
      headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
    })
    .subscribe(data => {
      console.log(data);
    });

  }

}
