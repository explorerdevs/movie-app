import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootLayout } from '../components';
import { LoginRoute, RegisterRoute } from './auth';
import { HomeRoute } from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='login' element={<LoginRoute />} />
      <Route path='register' element={<RegisterRoute />} />

      <Route element={<RootLayout />}>
        <Route index element={<HomeRoute />} />
        <Route path='*' element={<h1>Error Page</h1>} />
      </Route>
    </Route>
  ),
  { basename: import.meta.env.DEV ? '/' : '/movie-app/' }
);
