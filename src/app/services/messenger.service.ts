import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

export class KafkaService {
    private url = 'https://friday-gclistings.localtunnel.me';
    private socket;

    //
    // getMessage() {
    //     let observable = new Observable(observer => {
    //         this.socket = io(this.url);
    //         this.socket.on('message', (data) => {
    //
    //             observer.next(data);
    //
    //         });
    //         return () => {
    //             this.socket.disconnect();
    //         }
    //     })
    //     return observable;
    // }


}