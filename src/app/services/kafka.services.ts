import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

export class KafkaService {
  private url = 'http://localhost:8092';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  getMessage() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {

        observer.next(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

  // User2() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url2);
  //     this.socket.on('sampleMessage', (data) => {
  //
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     }
  //   })
  //   return observable;
  // }
}
