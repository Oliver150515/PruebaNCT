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

  term: string = '';
  exist:boolean = true;

  constructor(private trackingTransactionService: TrackingTransactionService) { }

  get transactions(){
    return this.trackingTransactionService.transactions;
  }

  buscar(){
    if(this.term.length > 0){
      this.exist = this.trackingTransactionService.getByName(this.term);
    }
    else {
      this.trackingTransactionService.getall();
    }
  }


}
