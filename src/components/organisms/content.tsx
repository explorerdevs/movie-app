import { Outlet } from "react-router-dom";

const PageContent = () => {
  return (
    <main className="">
      <Outlet />
    </main>
  );
};

export { PageContent };
