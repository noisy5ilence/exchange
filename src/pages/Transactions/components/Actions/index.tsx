import { Button } from '@/components/ui/button.tsx';
import { Link, useLocation } from 'react-router-dom';
import paths from '@/pages/paths.ts';

const Actions = () => {
  const location = useLocation();

  return (
    <ul className='w-full flex justify-end'>
      <li>
        <Button asChild>
          {location.pathname === paths.createTransaction.path ? (
            <Link to={paths.transactions.path}>Назад</Link>
          ) : (
            <Link to={paths.createTransaction.path}>Додати</Link>
          )}
        </Button>
      </li>
    </ul>
  );
};

export default Actions;
