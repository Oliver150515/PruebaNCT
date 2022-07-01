import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Transaction, UpdateTransaction } from '../../interfaces/Transactions.interface';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: [
  ]
})
export class DescriptionComponent implements OnInit {

  transaction!: Transaction;
  updateTransaction!: UpdateTransaction;
  updated: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private trackingTransactionService: TrackingTransactionService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id})=>{
        this.trackingTransactionService.getById()
          .subscribe((transaction)=>{

            const value = transaction.data.find((obj)=>{return obj.id === id});
            if(value){
              this.transaction = value;
              console.log(this.transaction);
            }
          }
        );
      }
    );
  }

  update(form: NgForm){
    this.updateTransaction = {
      id: this.transaction.id,
      concept: form.value.concept.toUpperCase(),
      description: form.value.description,
      ammount: form.value.ammount,
      date: form.value.date,
    }
    this.trackingTransactionService.update(this.updateTransaction);
    this.updated = true;
  }
}
