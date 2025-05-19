import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
})
export class ClientFormComponent {
  nom = '';
  email = '';

  constructor(private clientService: ClientService, private router: Router) {}

  save(): void {
    this.clientService.create({ nom: this.nom, email: this.email } as any).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
