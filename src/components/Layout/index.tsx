import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
