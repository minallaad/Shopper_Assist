import { Component ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {KafkaService} from "../services/kafka.services";
import {Globals} from "../globals";
import {LoginService} from "../services/login.service";



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  username :string;
  loggedIn:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private breakpointObserver: BreakpointObserver,private loginService:LoginService , public router: Router , private kafkaService: KafkaService,private globals: Globals) {

      iconRegistry.addSvgIcon(
          'Grocery_cart',
          sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/round-local_grocery_store-24px.svg'));

  }

   ngOnInit()
   {

       // this.authService.authState.subscribe((user) => {
       //     this.user = user;
       //     this.loggedIn = (user != null);
       //     this.globals.loggedIn=this.loggedIn;
       //     this.globals.myUserName = this.user.firstName;
       // });

        // setTimeout(()=>{
           this.username = this.globals.myUserName;
           // this.kafkaService.addUser(this.username);
     //   },1000)


   }

   logout()
   {
     this.globals.loggedIn=this.loggedIn=false;
     this.kafkaService.stopSharing();
     this.loginService.logout();
      this.router.navigate(['/login']);
   }
  }
