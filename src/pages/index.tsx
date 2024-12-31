import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProtectedRoute from '@/components/ProtectedRoute';
import Layout from '@/layouts/Main';
import Header from '@/layouts/Main/components/Header';
import Navigation from '@/layouts/Main/components/Navigation';
import paths from '@/pages/paths.ts';
import { User } from '@/providers/User/models.ts';
import useUser from '@/providers/User/useUser.ts';

const Roles = lazy(() => import('./Roles'));

const Transactions = lazy(() => import('./Transactions'));
const CreateTransaction = lazy(() => import('./Transactions/pages/CreateTransaction'));

const Paydesk = lazy(() => import('./Paydesk'));
const Currency = lazy(() => import('./Currency'));
const Clients = lazy(() => import('./Clients'));

const router = (user: User) =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: paths.index.path,
          element: <Roles />
        }
      ]
    },
    {
      element: (
        <ProtectedRoute isAvailable={Boolean(user.role)}>
          <Layout header={<Header />} footer={<Navigation />} />
        </ProtectedRoute>
      ),
      children: [
        {
          path: paths.transactions.path,
          element: <Transactions />
        },
        {
          path: paths.createTransaction.path,
          element: <CreateTransaction />
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
  const [user] = useUser();

  return (
    <Suspense>
      <RouterProvider router={router(user)} />
    </Suspense>
  );
};

export default Router;
