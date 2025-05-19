import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAll().subscribe(data => this.clients = data);
  }

  deleteClient(id: number): void {
    this.clientService.delete(id).subscribe(() => this.loadClients());
  }
}
