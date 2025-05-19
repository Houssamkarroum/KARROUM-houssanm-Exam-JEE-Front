import { Component, OnInit } from '@angular/core';
import { RemboursementService } from '../../services/remboursement.service';
import { Remboursement } from '../../model/remboursement.model';
import { Router, RouterModule } from '@angular/router';
import { TypeRemboursement } from '../../model/type-remboursement.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remboursement-form',
  templateUrl: './remboursement-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class RemboursementFormComponent implements OnInit {
  remboursement: Remboursement = {
    creditId: 0,
    date: new Date,
    montant: 0,
    type: TypeRemboursement.MENSUEL
  };

  constructor(
    private remboursementService: RemboursementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.remboursementService.create(this.remboursement).subscribe({
      next: (response) => {
        console.log('Remboursement saved successfully', response);
        this.router.navigate(['remboursements/by-credit/'+this.remboursement.creditId]);
      },
      error: (error) => {
        console.error('Error saving remboursement', error);
      }
    });
  }
}
