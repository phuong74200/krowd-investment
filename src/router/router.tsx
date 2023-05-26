import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorBoundary from '@/modules/error/error-boundary';
import { AuthRouteObject } from '@/types';

import { allRoute } from './routes/all';

export const resolveAllRoutes = (
  ...routes: AuthRouteObject[]
): AuthRouteObject[] => {
  return routes.map((route) => {
    if (route.layout)
      route.element = <route.layout>{route.element}</route.layout>;
    if (route.children) route.children = resolveAllRoutes(...route.children);
    return route;
  });
};

export const resolvedRoutes = resolveAllRoutes(
  {
    path: '/',
    element: <Navigate to="home" />,
  },
  allRoute,
  {
    path: '*',
    element: <ErrorBoundary />,
  }
);

export const browserRouter = createBrowserRouter(resolvedRoutes);
