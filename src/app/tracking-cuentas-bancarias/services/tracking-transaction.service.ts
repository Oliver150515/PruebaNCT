import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTransaction, Transaction, Transactions } from '../interfaces/Transactions.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingTransactionService {

  private apiUrlBase: string = 'http://63.135.170.173:5000';

  public transactions: Transaction[] = [];
  // HEADERS
  private httpHeaders = new HttpHeaders(
    {
      Authorization :'ac94e764-473b-46f5-8808-70b76824a029'
    }
  );

  constructor(private http: HttpClient) {
    this.getall();
  }

  getall(){
    const url = `${this.apiUrlBase}/transactions`;

    this.http
      .get<Transactions>(url, {headers: this.httpHeaders})
      .subscribe((resp) => {
        this.transactions = resp.data;
      }
    );
  }

  create(transaction: CreateTransaction){
    const url = `${this.apiUrlBase}/transactions`;
    this.http.post<Transactions>(url,
        {
          "concept": transaction.concept,
          "description": transaction.description,
          "ammount": transaction.ammount,
          "date": transaction.date,
          "accountId": transaction.accountId,
          "candidateId": "ac94e764-473b-46f5-8808-70b76824a029"
        },
        {headers: this.httpHeaders}
      ).subscribe((resp) => {
        this.getall();
      }
    );
  }
}
