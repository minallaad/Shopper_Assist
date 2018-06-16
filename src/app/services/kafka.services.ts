import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


export class KafkaService {

  private url = 'https://friday-gclistings.localtunnel.me';
  // private url = 'http://localhost:8092';
  private socket = io(this.url);

 private room_shared : boolean = false;



  sendMessage(message) {

    if( this.room_shared )
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
    this.room_shared = true;
    localStorage.setItem("room_shared","1");
    this.socket.emit('Room request',nick_names);

  }

  stopSharing(){
      this.room_shared = false;
      localStorage.setItem("room_shared","0");
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