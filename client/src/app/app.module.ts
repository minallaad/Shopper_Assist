import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
declare var require: any;


export function highchartsFactory() {
  return require('highcharts/highstock');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  	ChartModule//.forRoot(require('highcharts/highstock')),
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
