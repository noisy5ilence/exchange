import paths from '@/pages/paths.ts';
import useUser from '@/providers/User/useUser.ts';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { Role } from '@/providers/User/models.ts';

const Roles = () => {
  const [, setUser] = useUser();

  return (
    <ul className='flex flex-col gap-2 items-center justify-center flex-grow'>
      <li>
        <Button asChild>
          <Link onClick={() => setUser({ role: Role.cashier })} to={paths.transactions.path}>
            Касир
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild variant='destructive'>
          <Link onClick={() => setUser({ role: Role.administrator })} to={paths.transactions.path}>
            Адміністратор
          </Link>
        </Button>
      </li>
    </ul>
  );
};

export default Roles;
