import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FC } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router}/>
};

export default Router;
