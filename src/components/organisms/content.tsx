import { Outlet } from 'react-router-dom';

interface Props {}

const PageContent = (props: Props) => {
  return (
    <main className=''>
      <Outlet />
    </main>
  );
};

export { PageContent };
