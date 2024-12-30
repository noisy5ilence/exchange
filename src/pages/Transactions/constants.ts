import { TransactionType } from '@/providers/Transactions/models.ts';

export const transactionTypes = {
  [TransactionType.buy]: { id: TransactionType.buy, name: 'Купівля' },
  [TransactionType.sell]: { id: TransactionType.sell, name: 'Продаж' }
};
