import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Router from '@/pages';
import UserProvider from '@/providers/User';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </StrictMode>
);
