import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { DesignPage, Layout } from '../components';
import { LoginRoute, RegisterRoute } from './auth';
import { HomeRoute } from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='login' element={<LoginRoute />} />
      <Route path='register' element={<RegisterRoute />} />
      <Route path='design' element={<DesignPage />} />

      <Route element={<Layout />}>
        <Route index element={<HomeRoute />} />
        <Route path='*' element={<h1>Error Page</h1>} />
      </Route>
    </Route>
  )
);
