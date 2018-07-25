import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../Models/user.model";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private url = 'http://35.233.233.84:8092';
    private url = 'http://localhost:8092'
    userList: AngularFireList<any>;
    user:any;

  constructor(private db: AngularFireDatabase,private http: HttpClient) {

  }

    login(username: string, password: string) {

        let user = {username : username , password:password}

        return this.http.post(this.url+'/login', JSON.stringify(user), {
            headers: new HttpHeaders().set( 'Content-Type', 'application/json' )

        });


    }


    logout() {
      localStorage.clear();
    }

    loggedIn()
    {
        return (localStorage.getItem('access_token') != null);
    }

  SignUp(username,password,email,confirmPassword)
  {
    if(username != null && password !=null && email!=null && password === confirmPassword) {
        let user = new User(username, password, email, '', '');
        console.log(user);
        //this.db.list('UserDetails').push(user);

        //this.userList.push(user);
        return this.http.post(this.url+'/signUp', JSON.stringify(user), {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });


    }
  }


    changePassword(oldPassword,newPassword) {

      let password = {username :localStorage.getItem('username'),oldPassword:oldPassword , newPassword:newPassword , access_token:localStorage.getItem('access_token')};

      console.log(password);

      return this.http.post(this.url+'/changePassword', JSON.stringify(password), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
    }


}
