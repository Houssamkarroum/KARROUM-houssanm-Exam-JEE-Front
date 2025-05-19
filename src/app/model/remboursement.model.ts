import { TypeRemboursement } from './type-remboursement.enum';

export interface Remboursement {
  id?: number;
  date: Date;
  montant: number;
  type: TypeRemboursement;
  creditId: number;
}
