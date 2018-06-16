import { Injectable } from '@angular/core';
import {userList} from "app/Models/userList.model";

@Injectable()
export class Globals {
    usersList: userList ;
    room_shared : boolean;
}