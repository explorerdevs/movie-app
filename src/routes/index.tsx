import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { DesignPage, Layout } from '../components';
import { HomeRoute } from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='login' element={<h1>Login Page</h1>} />
      <Route path='register' element={<h1>Register Page</h1>} />
      <Route path='design' element={<DesignPage />} />

      <Route element={<Layout />}>
        <Route index element={<HomeRoute />} />
        <Route path='*' element={<h1>Error Page</h1>} />
      </Route>
    </Route>
  )
);
