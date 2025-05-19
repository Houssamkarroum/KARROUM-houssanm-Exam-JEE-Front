import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Root Component
import { AppComponent } from './app.component';

// Navbar
import { NavbarComponent } from './Navbar/navbar.component';

// Client Components
import { ClientListComponent } from './components/client/client-list.component';
import { ClientFormComponent } from './components/client/client-form.component';

// Credit Components
import { CreditFormComponent } from './components/credit/credit-form.component';
import { CreditByClientComponent } from './components/credit/credit-by-client.component';

// Remboursement Components
import { RemboursementFormComponent } from './components/remboursement/remboursement-form.component';
import { RemboursementByCreditComponent } from './components/remboursement/remboursement-by-credit.component';
import { AppRoutingModule } from './app-routing.module';

// Routin

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
     ClientFormComponent,
     CreditFormComponent,

    ClientListComponent,
   
    
    CreditByClientComponent,
    
         RemboursementFormComponent,
RemboursementByCreditComponent,
 NavbarComponent,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
