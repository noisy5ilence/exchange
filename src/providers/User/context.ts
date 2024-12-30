import { createContext, Dispatch, SetStateAction } from 'react';

import { User } from '@/providers/User/models.ts';

const UserContext = createContext<[User, Dispatch<SetStateAction<User>>]>([{ role: null }, () => {}]);

export default UserContext;
