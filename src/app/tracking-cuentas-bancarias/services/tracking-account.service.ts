import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, Accounts } from '../interfaces/Account.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingAccountService {

  private apiUrlBase: string = 'http://63.135.170.173:5000';
  public accounts: Account[] = [];


  // HEADERS
  private httpHeaders = new HttpHeaders(
    {
      Authorization :'ac94e764-473b-46f5-8808-70b76824a029'
    }
  );

  constructor(private http: HttpClient) {

    const url = `${this.apiUrlBase}/accounts`;

    this.http
      .get<Accounts>(url, {headers: this.httpHeaders})
      .subscribe((resp) => {
        this.accounts = resp.data
      }
    );
  }
}
