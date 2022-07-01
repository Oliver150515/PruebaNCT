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
  orderBy: boolean = true;
  delete: boolean = false;
  transaction: Transaction[] = [];

  constructor(private trackingTransactionService: TrackingTransactionService) {
    this.trackingTransactionService.getall();
  }

  get transactions(){
    this.transaction = this.trackingTransactionService.transactions;
    return this.transaction

  }

  Sort(){
    if(this.orderBy){
      this.transaction = this.transaction.sort((a,b) => a.concept.localeCompare(b.concept));
      this.orderBy = false;
    }
    else{
      this.transaction = this.transaction.sort((a,b) => -1 * a.concept.localeCompare(b.concept));
      this.orderBy = true;
    }
  }

  buscar(){
    this.delete = false;

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
      this.trackingTransactionService.delete(id)
        .subscribe((resp)=>{
         this.delete = resp.success;
         this.trackingTransactionService.getall();
        }
      );
      this.delete = true;
      this.term = '';
    }
  }

}
