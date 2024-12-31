import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge.tsx';
import Actions from '@/layouts/Main/components/Actions';
import paths from '@/pages/paths.ts';
import useTransactions from '@/providers/Transactions/useTransactions.ts';

import Table from './components/Table';

const Transactions = () => {
  const [transactions] = useTransactions();

  return (
    <>
      <Actions>
        <Badge variant='destructive'>
          <Link to={paths.createTransaction.path}>Додати</Link>
        </Badge>
      </Actions>
      <div className='mt-2'>
        <Table transactions={transactions} />
      </div>
    </>
  );
};

export default Transactions;
