import Login from '@/modules/auth/page/Login';
import DashboardLayout from '@/modules/layout/dash-board';
import LandingPage from '@/modules/seo/pages/lading';
import { AuthRouteObject } from '@/types';

export const allRoute: AuthRouteObject[] = [
  {
    path: '/home',
    element: <LandingPage />,
    // layout: ({ children }) => <div>layout: {children}</div>,
  },
  {
    path: '/nav',
    layout: DashboardLayout,
    children: [
      {
        path: '/nav',
        element: <h1>Hello world</h1>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];
