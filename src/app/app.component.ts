import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { KafkaService} from "./services/kafka.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
    profile:any;
    connection:any;
    constructor(private auth: AuthService, private conn:KafkaService) {
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();


        if(auth.isAuthenticated())
        {
            // this.profile = JSON.parse(localStorage.getItem('profile'));
            // localStorage.setItem('username',this.profile.nickname);
            this.connection = this.conn.addUser(localStorage.getItem('username'));
        }
        //
        //localStorage.setItem('username',this.profile['username']);
        //console.log(this.profile.nickname);


        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }


}
