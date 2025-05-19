import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credit } from '../model/credit.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CreditService {
  private apiUrl = 'http://localhost:8085/api/credits';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.apiUrl);
  }

  getById(id: number): Observable<Credit> {
    return this.http.get<Credit>(`${this.apiUrl}/${id}`);
  }

  create(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(this.apiUrl, credit);
  }

  getByClient(clientId: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.apiUrl}/byClient/${clientId}`);
  }
}
