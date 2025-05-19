import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../services/credit.service';
import { ClientService } from '../../services/client.service';
import { Credit } from '../../model/credit.model';
import { Client } from '../../model/client.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatutCredit } from '../../model/statut-credit.enum';
import { withFetch } from '@angular/common/http';   
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
    montant!: number;
    duree!: number;
    taux!: number;

    constructor(private creditService: CreditService, private clientService: ClientService) {}
    
    ngOnInit(): void {
        this.clientService.getAll().subscribe(data => {
        this.clients = data;
        });
    }
    
    getSelectedClientId(event: any): number {
        this.selectedClientId = event.target.value;
        console.log(this.selectedClientId);
        return this.selectedClientId;
    }
    save() {
        this.credit = {
            montant: this.montant,
            dateDemande: null,
            statut: StatutCredit.EN_ATTENTE,   
            dateAcceptation: null,
            dureeRemboursement: this.duree,
            tauxInteret: this.taux,
            clientId: this.selectedClientId
            
          // Use the StatutCredit enum value
          
        };
        console.log(this.credit);
        this.credit.clientId = this.selectedClientId;
        this.creditService.create(this.credit).subscribe(() => {
        alert("Crédit enregistré !");
        });
    }
}
