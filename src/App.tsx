import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { browserRouter } from './router';

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={browserRouter} />
    </HelmetProvider>
  );
}

export default App;
