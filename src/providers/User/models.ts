export enum Role {
  cashier = 'cashier',
  administrator = 'administrator'
}

export interface User {
  role: Role | null;
}
