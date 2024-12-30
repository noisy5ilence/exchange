import currencies from '@/data/currencies.ts';
import { Transaction, TransactionType } from '@/providers/Transactions/models.ts';

const transactions: Transaction[] = [
  {
    id: 1,
    currency1: currencies[0].id,
    currency2: currencies[1].id,
    client: '380931112233',
    transactionType: TransactionType.buy,
    rate: 41.5,
    sum1: 450,
    sum2: 500,
    date: new Date('2024-12-30T09:23:00').toString(),
    comment: 'Buy test'
  },
  {
    id: 2,
    currency1: currencies[0].id,
    currency2: currencies[1].id,
    client: '380931112233',
    transactionType: TransactionType.sell,
    rate: 41.5,
    sum1: 450,
    sum2: 500,
    date: new Date('2024-12-29T11:43:00').toString(),
    comment: 'Sell test'
  }
];

export default transactions;
