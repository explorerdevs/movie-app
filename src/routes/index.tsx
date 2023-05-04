import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from '../components';
import { HomeRoute } from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomeRoute />} />
      <Route path='*' element={<h1>Error Page</h1>} />
    </Route>
  )
);
