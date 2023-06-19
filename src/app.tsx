import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const baseTheme = createTheme();

import { browserRouter } from './router';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
