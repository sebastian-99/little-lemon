import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
const WebLayout = () => {
  return (
    <>
      <div className="p-2">
        <HeaderNav />
        <div className="container-fluid">
          <Outlet />
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebLayout;
