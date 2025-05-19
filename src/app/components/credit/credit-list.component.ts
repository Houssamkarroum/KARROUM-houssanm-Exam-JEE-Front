import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { Credit } from '../../model/credit.model';
import { CreditService } from '../../services/credit.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';   

@Component({
    selector: 'app-credit-list',
    templateUrl: './credit-list.component.html',
     standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CreditListComponent implements OnInit {

    credits!: Credit[];

    constructor(private http: HttpClient, private creditservice : CreditService) { }

    ngOnInit(): void {
        this.creditservice.getAll().subscribe({
            next: (credits) => this.credits = credits,
            complete: () => console.log('Credits loaded successfully'+ this.credits),
            error: (err) => {
                console.error('Failed to load credits:', err);
                this.credits = [];
            }
        });
    }

}
