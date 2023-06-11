import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import ThemeConfig from './shared/theme';
import { browserRouter } from './router';

function App() {
  return (
    <HelmetProvider>
      <CssBaseline />
      <ThemeConfig>
        <RouterProvider router={browserRouter} />
      </ThemeConfig>
    </HelmetProvider>
  );
}

export default App;
