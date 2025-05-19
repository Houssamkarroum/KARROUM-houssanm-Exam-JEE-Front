import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RemboursementService } from '../../services/remboursement.service';
import { Remboursement } from '../../model/remboursement.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-remboursement-by-credit',
  templateUrl: './remboursement-by-credit.component.html',
   standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class RemboursementByCreditComponent implements OnInit {
  creditId!: number;
  remboursements: Remboursement[] = [];

  constructor(
    private route: ActivatedRoute,
    private remboursementService: RemboursementService
  ) {}

  ngOnInit(): void {
    this.creditId = Number(this.route.snapshot.paramMap.get('creditId'));
    this.remboursementService.getByCredit(this.creditId).subscribe(data => {
      this.remboursements = data;
    });
  }
}
