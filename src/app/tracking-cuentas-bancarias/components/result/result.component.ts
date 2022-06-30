import { Component } from '@angular/core';
import { Transaction } from '../../interfaces/Transactions.interface';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  private trans: Transaction[] = [];
  constructor(private trackingTransactionService: TrackingTransactionService) { }

  get transactions(){
    this.trans = this.trackingTransactionService.transactions;
    // console.log(this.trackingTransactionService.transactions.filter((objt) => {return objt.concept.includes('PRUEBA')}));
    return this.trans;
  }


}
