import { PageContent, Sidebar } from '../organisms';

function RootLayout() {
  return (
    <div className=''>
      <Sidebar />
      <PageContent />
    </div>
  );
}

export { RootLayout };
