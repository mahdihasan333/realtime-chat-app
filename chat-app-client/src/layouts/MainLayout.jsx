import { Outlet } from "react-router-dom";
import Navbar from "../shared-components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
