import useTransactions from '@/providers/Transactions/useTransactions.ts';

import Actions from './components/Actions';
import Table from './components/Table';

const Transactions = () => {
  const [transactions] = useTransactions();

  return (
    <>
      <Actions />
      <div className='mt-2'>
        <Table transactions={transactions} />
      </div>
    </>
  );
};

export default Transactions;
