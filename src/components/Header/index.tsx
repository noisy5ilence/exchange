import { Badge } from '@/components/ui/badge.tsx';
import { userTypes } from '@/providers/User/constants.ts';
import useUser from '@/providers/User/useUser.ts';

const Header = () => {
  const [user] = useUser();

  return <header>{user.role && <Badge>{userTypes[user.role].name}</Badge>}</header>;
};

export default Header;
