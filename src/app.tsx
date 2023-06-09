import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { browserRouter } from './router';

function App() {
  return (
    <HelmetProvider>
      <CssBaseline />
      <RouterProvider router={browserRouter} />
    </HelmetProvider>
  );
}

export default App;
