import { FC, ReactNode, useState } from 'react';
import { Transaction } from './models.ts';
import transactions from '@/data/transactions.ts';

import TransactionsContext from './context.ts';

interface Props {
  children: ReactNode;
}

const TransactionsProvider: FC<Props> = ({ children }) => {
  const state = useState<Transaction[]>(transactions);

  return <TransactionsContext.Provider value={state}>{children}</TransactionsContext.Provider>;
};

export default TransactionsProvider;
