import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge.tsx';
import Actions from '@/layouts/Main/components/Actions';
import paths from '@/pages/paths.ts';

import Form from './components/Form';

const CreateTransaction = () => {
  return (
    <>
      <Actions>
        <Badge variant='destructive'>
          <Link to={paths.transactions.path}>Назад</Link>
        </Badge>
      </Actions>
      <Form />
    </>
  );
};

export default CreateTransaction;
