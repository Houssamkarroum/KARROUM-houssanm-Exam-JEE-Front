import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/client.model'; // Import the Client model

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ClientFormComponent {
  client!: Client;
   // Use the Client model
  // nom et email
    nom!: string;
    email!: string;

  constructor(private clientService: ClientService, private router: Router) {}

  save(): void {
    // Create a new client object
    this.client = {
      nom: this.nom,
      email: this.email,
    };
    console.log(this.client);
    this.clientService.create(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
