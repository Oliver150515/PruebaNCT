import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTransaction, Transaction, Transactions } from '../interfaces/Transactions.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingTransactionService {

  private apiUrlBase: string = 'http://63.135.170.173:5000';

  public transactions: Transaction[] = [];
  public Serchtransactions: Transaction[] = [];
  public transaction!: Transaction;

  // HEADERS
  private httpHeaders = new HttpHeaders(
    {
      Authorization :'ac94e764-473b-46f5-8808-70b76824a029'
    }
  );

  constructor(private http: HttpClient) {}

  getall(){
    const url = `${this.apiUrlBase}/transactions`;

    this.http
      .get<Transactions>(url, {headers: this.httpHeaders})
      .subscribe((resp) => {
        this.transactions = resp.data;
        this.Serchtransactions = resp.data;
      }
    );
  }

  getByName(term: string){
    var result = this.Serchtransactions.filter((obj) => {return obj.concept.includes(term.toUpperCase())});
    if(result.length > 0){
      this.transactions = result;
      return true;
    }
    return false;
  }

  getById(): Observable<Transactions>{
    const url = `${this.apiUrlBase}/transactions`;

    return this.http.get<Transactions>(url, {headers: this.httpHeaders})
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
        {
          headers: this.httpHeaders
        }
      ).subscribe((resp) => {
        this.getall();
      }
    );
  }

  delete(id: string): Observable<Transactions>{
    const url = `${this.apiUrlBase}/transactions/${id}`;

    const params = new HttpParams()
      .set('id', id);

    return this.http.delete<Transactions>(url, {params, headers:this.httpHeaders});
  }
}
