import { Component, OnInit } from '@angular/core';
import {ChartService} from "../chart.services";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  connection:any;
  ngOnInit() {

    console.log("in list");
    this.connection = this.chartService.getMessage().subscribe(message =>{
        console.log(message);
    })
  }

}
