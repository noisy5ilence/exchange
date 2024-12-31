import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge.tsx';
import paths from '@/pages/paths.ts';
import { userTypes } from '@/providers/User/constants.ts';
import useUser from '@/providers/User/useUser.ts';

const Header = () => {
  const [user] = useUser();

  return (
    <div id='actions' className='flex justify-between'>
      {user.role && (
        <Badge>
          <Link to={paths.index.path}>{userTypes[user.role].name}</Link>
        </Badge>
      )}
    </div>
  );
};

export default Header;
