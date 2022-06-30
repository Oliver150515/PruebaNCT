import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction, Transactions } from '../../interfaces/Transactions.interface';
import { TrackingAccountService } from '../../services/tracking-account.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent  {

  transaction = {} as Transaction;


  constructor(private accounts: TrackingAccountService) {}

  get Accounts() {
    return this.accounts.accounts;
  }


  Create(f: any){
    console.log(f.value);
  }

}
