import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button.tsx';
import paths from '@/pages/paths.ts';
import { userTypes } from '@/providers/User/constants.ts';
import { Role } from '@/providers/User/models.ts';
import useUser from '@/providers/User/useUser.ts';

const Roles = () => {
  const [, setUser] = useUser();

  return (
    <ul className='flex flex-grow flex-col items-center justify-center gap-2'>
      <li>
        <Button asChild>
          <Link onClick={() => setUser({ role: Role.cashier })} to={paths.transactions.path}>
            {userTypes[Role.cashier].name}
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild variant='destructive'>
          <Link onClick={() => setUser({ role: Role.administrator })} to={paths.transactions.path}>
            {userTypes[Role.administrator].name}
          </Link>
        </Button>
      </li>
    </ul>
  );
};

export default Roles;
