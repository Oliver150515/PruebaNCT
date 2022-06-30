import { Component } from '@angular/core';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  constructor(private trackingTransactionService: TrackingTransactionService) { }

  get transactions(){
    return this.trackingTransactionService.transactions;
  }


}
