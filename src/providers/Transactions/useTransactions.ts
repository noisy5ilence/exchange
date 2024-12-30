import { useContext } from 'react';
import TransactionsContext from './context.ts';

const useTransactions = () => useContext(TransactionsContext);

export default useTransactions;
