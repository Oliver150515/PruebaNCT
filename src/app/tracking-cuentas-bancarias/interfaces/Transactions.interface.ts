export interface Transactions {
  success:      boolean;
  errorMessage: null;
  data:         Transaction[];
}

export interface Transaction {
  id:          string;
  concept:     string;
  description: string;
  ammount:     number;
  date:        Date;
  accountId:   string;
  candidateId: string;
  createdAt:   Date;
  updatedAt:   Date;
}
