import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingAccountService {

  private apiUrlBase: string = 'http://63.135.170.173:5000';

  // HEADERS
  private httpHeaders = new HttpHeaders(
    {
      Authorization :'ac94e764-473b-46f5-8808-70b76824a029'
    }
  );

  constructor(private http: HttpClient) { }

  GetAll() {
    const url = `${this.apiUrlBase}/accounts`;

    return this.http.get(url, {headers: this.httpHeaders} );

  }


}
