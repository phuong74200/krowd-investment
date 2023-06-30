import Login from '@/modules/auth/page/Login';
import Register from '@/modules/auth/page/Register';
import DashBoardPage from '@/modules/dashboard/page/po-dashboard';
import NavSection from '@/modules/layout/components/nav-section';
import DashboardLayout from '@/modules/layout/dash-board';
import POProjectManagement from '@/modules/projects/page/po-project-management';
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
        element: <DashBoardPage />,
      },
    ],
  },
  {
    path: '/projects',
    layout: DashboardLayout,
    children: [
      {
        path: '/projects',
        element: <POProjectManagement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
];
