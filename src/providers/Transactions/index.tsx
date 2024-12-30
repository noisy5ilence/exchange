import { FC, ReactNode, useState } from 'react';

import transactions from '@/data/transactions.ts';

import TransactionsContext from './context.ts';
import { Transaction } from './models.ts';

interface Props {
  children: ReactNode;
}

const TransactionsProvider: FC<Props> = ({ children }) => {
  const state = useState<Transaction[]>(transactions);

  return <TransactionsContext.Provider value={state}>{children}</TransactionsContext.Provider>;
};

export default TransactionsProvider;
