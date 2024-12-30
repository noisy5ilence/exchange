import { createContext, Dispatch, SetStateAction } from 'react';

import transactions from '@/data/transactions.ts';

import { Transaction } from './models.ts';

const TransactionsContext = createContext<[Transaction[], Dispatch<SetStateAction<Transaction[]>>]>([
  transactions,
  () => {}
]);

export default TransactionsContext;
