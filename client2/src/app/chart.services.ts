import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChartService {
  private url = 'http://localhost:8091';
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
        console.log(data);
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
