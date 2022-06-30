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

  constructor(private trackingTransactionService: TrackingTransactionService) {
    this.trackingTransactionService.getall();
   }

  get transactions(){
    return this.trackingTransactionService.transactions;
  }

  buscar(){
    if(this.term.length > 0){
      this.exist = this.trackingTransactionService.getByName(this.term);

      if(!this.exist){
        this.exist = false;
      }
    }
    else {
      this.trackingTransactionService.getall();
      this.exist = true;
    }
  }

  eliminar(id: string, concept: string){
    if(confirm("Borar el elemento: "+ concept)){
      console.log(id);
    }
  }
}
