import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../lib';
import { router } from '../routes';

interface Props {}

const Providers = (props: Props) => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export { Providers };
