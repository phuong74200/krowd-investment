import Login from '@/modules/auth/page/Login';
import Register from '@/modules/auth/page/Register';
import NavSection from '@/modules/layout/components/nav-section';
import LandingPage from '@/modules/seo/pages/lading';
import sidebarConfig from '@/shared/configs/sidebar-config';
import { AuthRouteObject } from '@/types';

export const allRoute: AuthRouteObject[] = [
  {
    path: '/home',
    element: <LandingPage />,
    // layout: ({ children }) => <div>layout: {children}</div>,
  },
  {
    path: '/nav',
    element: <NavSection navConfig={sidebarConfig} isShow />,
    // layout: ({ children }) => <div>layout: {children}</div>,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
];
