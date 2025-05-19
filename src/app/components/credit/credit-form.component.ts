import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../services/credit.service';
import { ClientService } from '../../services/client.service';
import { Credit } from '../../model/credit.model';
import { Client } from '../../model/client.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
   standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CreditFormComponent implements OnInit {
    credit!: Credit;
    clients!: Client[];
    selectedClientId!: number;
    
    constructor(private creditService: CreditService, private clientService: ClientService) {}
    
    ngOnInit(): void {
        this.clientService.getAll().subscribe(data => {
        this.clients = data;
        });
    }
    
    save() {
        this.credit.clientId = this.selectedClientId;
        this.creditService.create(this.credit).subscribe(() => {
        alert("Crédit enregistré !");
        });
    }
}
