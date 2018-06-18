import { Injectable } from '@angular/core';
import {userList} from "app/Models/userList.model";

@Injectable()
export class Globals {
    usersList: userList ;
    sharing_status:boolean = false;
    shared_status:boolean = false;
    username:string;
}