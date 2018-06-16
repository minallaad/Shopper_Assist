import { Component ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  username :string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private breakpointObserver: BreakpointObserver , private auth: AuthService,public router: Router) {

      iconRegistry.addSvgIcon(
          'Grocery_cart',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-local_grocery_store-24px.svg'));

  }

   ngOnInit()
   {
     this.username = localStorage.getItem('username');
   }

   logout()
   {
     this.auth.handleAuthentication();
     localStorage.clear();

     this.auth.logout();
   }
  }