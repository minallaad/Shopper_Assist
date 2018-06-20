import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private auth: AuthService) {
        // Comment out this method call if using
        // hash-based routing


        // Uncomment this method call if using
        // hash-based routing
        // auth.handleAuthenticationWithHash();
    }


    ngOnInit() {
  }


}
