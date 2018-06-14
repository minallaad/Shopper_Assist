import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
    profile:any;
    constructor(private auth: AuthService) {
        // Comment out this method call if using
        // hash-based routing
        auth.handleAuthentication();

        // this.profile = JSON.parse(localStorage.getItem('profile'));
        // console.log(this.profile);

        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }


}
