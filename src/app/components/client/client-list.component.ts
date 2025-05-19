import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
   standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ClientListComponent implements OnInit {
  clients!: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(client : Client) {
    this.clientService.delete(client.id!).subscribe(() => {
      this.clients = this.clients.filter(c => c.id !== client.id);
    });
  }
}
