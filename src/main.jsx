import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles.style';

import Home from './components/Home.jsx';
import Country from './components/Country.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      // Nested routes or Dynamic routes. A unique identifier
      {
        path: 'country/:countryName',
        element: <Country />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    {/* Provides the routes to the app */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
