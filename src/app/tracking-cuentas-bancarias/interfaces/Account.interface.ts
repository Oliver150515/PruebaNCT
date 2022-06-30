export interface Accounts {
  success:      boolean;
  errorMessage: null;
  data:         Account[];
}

export interface Account {
  id:        string;
  type:      string;
  currency:  string;
  createdAt: Date;
  updatedAt: Date;
}
