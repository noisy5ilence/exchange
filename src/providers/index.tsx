import { FC, ReactNode } from 'react';

import TransactionsProvider from '@/providers/Transactions';
import UserProvider from '@/providers/User';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <UserProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </UserProvider>
  );
};

export default Providers;
