import { createBrowserRouter } from 'react-router-dom';
import AuthRedirect from './auth-redirect';
import AuthLayout from '../layouts/auth';
import AdminLayout from '../layouts/admin';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: AuthRedirect,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      { index: true, Component: Login },
      {
        path: '/auth/login',
        index: true,
        Component: Login,
      },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      {
        path: '/admin/dashboard',
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

export default Router;
