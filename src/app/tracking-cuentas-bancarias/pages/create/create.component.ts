import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreateTransaction, Transaction, Transactions } from '../../interfaces/Transactions.interface';
import { TrackingAccountService } from '../../services/tracking-account.service';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent  {

  transaction = {} as CreateTransaction;
  create: Boolean = true;

  constructor(private accountsServices: TrackingAccountService, private transactionsServices: TrackingTransactionService) {}

  get Accounts() {
    return this.accountsServices.accounts;
  }

  Create(form: NgForm){
    console.log(form.value);
    this.transaction = {
      concept: form.value.concept.toUpperCase(),
      description: form.value.description.toLowerCase(),
      ammount: form.value.ammount,
      date: form.value.date,
      accountId: form.value.accountId
    };

    this.transactionsServices.create(this.transaction);

    form.reset();
  }
}
