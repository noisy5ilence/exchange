import { FC, ReactNode, useState } from 'react';

import UserContext from './context';
import { User } from './models.ts';

interface Props {
  children: ReactNode;
}

const UserProvider: FC<Props> = ({ children }) => {
  const state = useState<User>({ role: null });

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
