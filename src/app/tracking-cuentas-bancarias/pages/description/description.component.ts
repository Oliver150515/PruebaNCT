import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Transaction } from '../../interfaces/Transactions.interface';
import { TrackingTransactionService } from '../../services/tracking-transaction.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: [
  ]
})
export class DescriptionComponent implements OnInit {

  transaction!: Transaction;


  constructor(private activatedRoute: ActivatedRoute, private trackingTransactionService: TrackingTransactionService) {
    this.trackingTransactionService.getall();
  }

  get transactions(){
    return this.trackingTransactionService.transactions;
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

  }


}
