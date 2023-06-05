import { createBrowserRouter } from 'react-router-dom';

import { Goals } from './pages/Goals';
import { Login } from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Goals />
  },
  {
    path: '/login',
    element: <Login />
  }
]);
