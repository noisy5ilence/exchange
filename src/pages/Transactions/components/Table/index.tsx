import { Table as UITable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Transaction, TransactionType } from '@/providers/Transactions/models.ts';
import { FC } from 'react';
import { transactionTypes } from '@/pages/Transactions/constants.ts';
import { currenciesRecord } from '@/data/currencies.ts';
import { cn, formatDate } from '@/lib/utils.ts';

interface Props {
  transactions: Transaction[];
}

const Table: FC<Props> = ({ transactions }) => {
  return (
    <UITable>
      <TableHeader>
        <TableRow>
          <TableHead className='text-nowrap'>Операція</TableHead>
          <TableHead className='text-nowrap'>Валюта 1</TableHead>
          <TableHead className='text-nowrap'>Сума 1</TableHead>
          <TableHead className='text-nowrap'>Валюта 2</TableHead>
          <TableHead className='text-nowrap'>Сума 2</TableHead>
          <TableHead className='text-nowrap'>Курс</TableHead>
          <TableHead className='text-nowrap'>Час</TableHead>
          <TableHead className='text-nowrap'>Клієнт</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell
              className={cn(
                transaction.transactionType === TransactionType.sell && 'bg-red-500',
                transaction.transactionType === TransactionType.buy && 'bg-green-500'
              )}
            >
              {transactionTypes[transaction.transactionType]?.name}
            </TableCell>
            <TableCell>{currenciesRecord[transaction.currency1]?.name}</TableCell>
            <TableCell>{transaction.sum1}</TableCell>
            <TableCell>{currenciesRecord[transaction.currency2]?.name}</TableCell>
            <TableCell>{transaction.sum2}</TableCell>
            <TableCell className='bg-yellow-500'>{transaction.rate}</TableCell>
            <TableCell className='text-nowrap'>{formatDate(transaction.date)}</TableCell>
            <TableCell>{transaction.client}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  );
};

export default Table;
