import { Component } from '@angular/core';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  term: string = '';
  exist:boolean = false;

  constructor(private trackingTransaction: TrackingTransactionService) { }

  buscar(){
    console.log(this.term);
  }
}
