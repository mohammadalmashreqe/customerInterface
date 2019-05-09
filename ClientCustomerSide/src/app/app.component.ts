import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageQueueService } from './message-queue.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Memberof  of app component
   */
  pageTitle = 'Q services';

  /**
   * List  of app component
   */
  List: string[];

  /**
   * Subscription  of app component
   */
  subscription: Subscription;



  /**
* Creates an instance of app component.
* @param service 
*/
  constructor(private service: MessageQueueService) {


  }

  /**
   * @memberof AppComponent
   */
  ngOnInit(): void {
    try {
      this.subscription = this.service.getUpdate()
        .subscribe(List => {
          this.List = List;
        });
    }
    catch (err) {
      console.log(err);
    }
  }





  /**
   * Determines whether new on
   * @memberof AppComponent
   */

  OnNew(): void {
    try {
      this.subscription = this.service.NewTicket()
        .subscribe(List => {
          this.List = List;
        });

      this.subscription = this.service.getUpdate()
        .subscribe(List => {
          this.List = List;
        });



    }
    catch (err) {
      console.log(err);
    }
  }

  /**
    * @memberof AppComponent
   */

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    }
    catch (err) {
      console.log(err);
    }
  }

}