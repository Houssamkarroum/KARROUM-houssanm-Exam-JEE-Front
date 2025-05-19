import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Credit {
    id: number;
    clientName: string;
    amount: number;
    dueDate: string;
    status: string;
}

@Component({
    selector: 'app-credit-list',
    templateUrl: './credit-list.component.html',
     standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CreditListComponent implements OnInit {

    credits: Credit[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Credit[]>('http://localhost:8080/api/credits')
            .subscribe(data => this.credits = data);
    }

}
