export enum TransactionType {
  sell = 'sell',
  buy = 'buy'
}

export interface Transaction {
  id: number;
  date: string;
  transactionType: TransactionType;
  currency1: number;
  currency2: number;
  rate: number;
  sum1: number;
  sum2: number;
  client: string;
  comment: string;
}
