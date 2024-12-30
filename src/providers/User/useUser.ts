import { useContext } from 'react';
import UserContext from './context.ts';

const useUser = () => useContext(UserContext);

export default useUser;
