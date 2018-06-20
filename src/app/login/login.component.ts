import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {KafkaService} from "../services/kafka.services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connection:any;
  constructor(private auth: AuthService, private conn:KafkaService,) { }

  ngOnInit() {
      // else{
      console.log(this.auth.isAuthenticated());
      if(!this.auth.isAuthenticated())
      {
        this.auth.login();
      }

      // this.profile = JSON.parse(localStorage.getItem('profile'));
      // localStorage.setItem('username',this.profile.nickname);
      console.log(localStorage.getItem('username'));

  }

}
