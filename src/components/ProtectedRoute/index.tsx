import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import paths from '@/pages/paths.ts';

interface Props {
  isAvailable: boolean;
  children: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children, isAvailable }) =>
  isAvailable ? children : <Navigate replace to={paths.index.path} />;

export default ProtectedRoute;
