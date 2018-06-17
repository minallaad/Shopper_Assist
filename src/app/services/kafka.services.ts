import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


export class KafkaService {

  //private url = 'https://friday-gclistings.localtunnel.me';
  private url = 'http://localhost:8092';
  private socket = io(this.url);
  private usersWilling ;

 //private room_shared : boolean = false;



  sendMessage(message) {

    // if( this.room_shared )
    // {
        this.socket.emit('add-message', message);
        console.log("MESSAGE SENT");
    //}

  }


  addUser(nick_name){
      this.socket.emit('new user', nick_name);
      console.log("User set");
  }

/*Emitter functions checkRoom and checkAnomaly*/
  checkRoom(nick_names){

     let observable = new Observable(observer => {
         this.socket.emit('Request',nick_names,function(usersWilling){
             observer.next(usersWilling);
             //this.usersWilling = usersWilling;
         });
     })
     return  observable;
  }

//checkAnomaly particularly not required you can check by usersWilling
  checkAnomaly(nick_names){
        this.socket.emit('Check',nick_names,function(confirm){
            console.log(confirm);
        });
    }

/*Reciever functions checkRequest and sendResponse*/
  // checkRequest(){
  //       let observable = new Observable(observer => {
  //           this.socket.on('request-message-1', (data) => {
  //               console.log(data);
  //               observer.next(data);
  //           });
  //       })
  //       return observable;
  //
  //   }



   sendResponse(response){
        this.socket.emit('request-message-2',response);
    }

  addToRoom(nick_names ){
    console.log(typeof nick_names);
    console.log(nick_names);
    //this.room_shared = true;
    localStorage.setItem("room_shared","1");

    this.socket.emit('Room request',nick_names ,function(confirm){
        if(confirm){
            this.socket.emit('stop-sharing');
        }
      });

  }

  stopSharing(){
      //this.room_shared = false;
      localStorage.setItem("room_shared","0");
      this.socket.emit('stop-sharing');
  }


  getMessage() {
    let observable = new Observable(observer => {
      //this.socket = io(this.url);
      this.socket.on('message', (data) => {
      //     if(data.toString().includes("wants to share")){
      //         fn(false);
      //     }
      //   else {
              observer.next(data);
          // }

      });
      // return () => {
      //   this.socket.disconnect();
      //   console.log('Disconnecting');
      // }
    })
    return observable;
  }


}