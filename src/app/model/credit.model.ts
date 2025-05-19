import { StatutCredit } from './statut-credit.enum';

export interface Credit {
  id?: number;
  dateDemande: Date | number | null;
  statut: StatutCredit;
  dateAcceptation: Date | null;
  montant: number;
  dureeRemboursement: number;
  tauxInteret: number;
  clientId: number;
}
