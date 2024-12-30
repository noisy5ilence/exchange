import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Main from '@/layouts/Main';
import paths from '@/pages/paths.ts';

const Roles = lazy(() => import('./Roles'));
const Transactions = lazy(() => import('./Transactions'));
const CreateTransaction = lazy(() => import('./Transactions/pages/CreateTransaction'));
const TransactionsProvider = lazy(() => import('@/providers/Transactions'));
const Paydesk = lazy(() => import('./Paydesk'));
const Currency = lazy(() => import('./Currency'));
const Clients = lazy(() => import('./Clients'));

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: paths.index.path,
        element: <Roles />
      }
    ]
  },
  {
    element: <Main header={<Header />} footer={<Navigation />} />,
    children: [
      {
        path: paths.transactions.path,
        element: (
          <TransactionsProvider>
            <Transactions />
          </TransactionsProvider>
        )
      },
      {
        path: paths.createTransaction.path,
        element: (
          <TransactionsProvider>
            <CreateTransaction />
          </TransactionsProvider>
        )
      },
      {
        path: paths.paydesk.path,
        element: <Paydesk />
      },
      {
        path: paths.currency.path,
        element: <Currency />
      },
      {
        path: paths.clients.path,
        element: <Clients />
      }
    ]
  }
]);

const Router: FC = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
