import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {CanActivate} from "@angular/router";
import {AuthService} from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService, private router: Router){

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.isAuthenticated()){
            return true;
            }
            else{
            console.log('Blocked by AuthGuard');
            this.router.navigate(['/']);
            return false;
        }
    }
}