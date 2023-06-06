import { PageContent, Sidebar } from '../organisms';

interface Props {}

const Layout = (props: Props) => {
  return (
    <div className=''>
      <Sidebar />
      <PageContent />
    </div>
  );
};

export { Layout };
