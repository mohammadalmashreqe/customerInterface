import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessageQueueService {
/**
   * Url  of message queue service
   */
  private url = 'http://localhost:3000';
  List: string[];
  /**
   * Socket  of message queue service
   */
  private socket;
  /**
   * Observer  of message queue service
   */
  observer: Observer<string[]>;
  /**
   * Creates an instance of message queue service.
   */
  constructor() {
    try {
      this.socket = io(this.url);
    }
    catch (err) {
      console.log(err);
    }
  }




  /**
   * Gets q
   * @returns q 
   */
  getQ(): Observable<string[]> {

    try {
      this.socket.on('UpadteList', (res) => {
        this.observer.next(res);
      });

      return this.createObservable();
    }

    catch (err) {
      console.log(err);
    }

  }





  /**
   * Creates observable
   * @returns observable 
   */
  createObservable(): Observable<string[]> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }





  /**
   * News tickets 
   */
  NewTickets(): void {
    try {

      this.socket.emit('new-Tickets');
    }


    catch (err) {
      console.log(err);

    }
  }


}
