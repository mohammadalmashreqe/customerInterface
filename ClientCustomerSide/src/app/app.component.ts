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
   * SubscriptionforList  of app component
   */
  subscriptionForList: Subscription;

  /**
   * SubscriptionforList  of app component
   */
  subscriptionforResult: Subscription;


  ResultOFCallAPI:any;

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
      this.subscriptionForList = this.service.getUpdate()
        .subscribe(List => {
          this.List = List;
          
  console.log("res = "+List.toString());

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
      this.subscriptionforResult = this.service.NewTicket()
        .subscribe(result => {
          this.ResultOFCallAPI = result;
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
      this.subscriptionForList.unsubscribe();
      this.subscriptionforResult.unsubscribe();
    }
    catch (err) {
      console.log(err);
    }
  }

}