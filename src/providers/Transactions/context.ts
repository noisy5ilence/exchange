import { createContext, Dispatch, SetStateAction } from 'react';
import { Transaction } from './models.ts';
import transactions from '@/data/transactions.ts';

const TransactionsContext = createContext<[Transaction[], Dispatch<SetStateAction<Transaction[]>>]>([
  transactions,
  () => {}
]);

export default TransactionsContext;
