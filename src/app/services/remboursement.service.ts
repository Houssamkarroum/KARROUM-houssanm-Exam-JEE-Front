import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Remboursement } from '../model/remboursement.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RemboursementService {
  private apiUrl = 'http://localhost:8085/api/remboursements';

  constructor(private http: HttpClient) {}

  create(remboursement: Remboursement): Observable<Remboursement> {
    return this.http.post<Remboursement>(this.apiUrl, remboursement);
  }

  getByCredit(creditId: number): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${this.apiUrl}/byCredit/${creditId}`);
  }
}
