import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CreditService } from '../../services/credit.service';
import { Credit } from '../../model/credit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-by-client',
  templateUrl: './credit-by-client.component.html',
   standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CreditByClientComponent implements OnInit {
  clientId!: number;
  credits: Credit[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditService: CreditService
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('clientId'));
    this.creditService.getByClient(this.clientId).subscribe(data => {
      this.credits = data;
    });
  }

  voirRemboursements(creditId: number) {
    this.router.navigate(['/remboursements/by-credit', creditId]);
  }
}
