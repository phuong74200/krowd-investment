import Button from '@mui/material/Button';

import { AuthRouteObject } from '@/types';

export const allRoute: AuthRouteObject = {
  path: '/home',
  element: <Button variant="contained">home page</Button>,
  layout: ({ children }) => <div>layout: {children}</div>,
};
