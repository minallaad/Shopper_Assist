import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Globals } from '../globals';

export class KafkaService {
  //private url = 'https://friday-gclistings.localtunnel.me';


  constructor(private globals : Globals)
  {

  }
     private url = 'http://localhost:8092';
  private socket = io(this.url);

  // let observable = new Observable;

  sendMessage(message) {

    if( this.globals.room_shared )
    {
        this.socket.emit('add-message', message);
        console.log("MESSAGE SENT");
    }

  }


  addUser(nick_name){
      this.socket.emit('new user', nick_name);
      console.log("User set");
  }

  addToRoom(nick_names ){
    console.log(typeof nick_names);
    console.log(nick_names);
    this.globals.room_shared = true;
    this.socket.emit('Room request',nick_names);

  }

  stopSharing(){
      this.globals.room_shared = false;
      this.socket.emit('stop-sharing');
  }


  getMessage() {
    let observable = new Observable(observer => {
      //this.socket = io(this.url);
      this.socket.on('message', (data) => {

        observer.next(data);

      });
      // return () => {
      //   this.socket.disconnect();
      //   console.log('Disconnecting');
      // }
    })
    return observable;
  }


}