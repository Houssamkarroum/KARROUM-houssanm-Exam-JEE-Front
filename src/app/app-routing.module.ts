import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './components/client/client-list.component';
import { ClientFormComponent } from './components/client/client-form.component';

import { CreditListComponent } from './components/credit/credit-list.component';
import { CreditFormComponent } from './components/credit/credit-form.component';
import { CreditByClientComponent } from './components/credit/credit-by-client.component';

import { RemboursementFormComponent } from './components/remboursement/remboursement-form.component';
import { RemboursementByCreditComponent } from './components/remboursement/remboursement-by-credit.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },

  { path: 'clients', component: ClientListComponent },
  { path: 'clients/add', component: ClientFormComponent },

  { path: 'credits', component: CreditListComponent },
  { path: 'credits/add', component: CreditFormComponent },
  { path: 'credits/by-client/:clientId', component: CreditByClientComponent },

  { path: 'remboursements/add', component: RemboursementFormComponent },
  { path: 'remboursements/by-credit/:creditId', component: RemboursementByCreditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
