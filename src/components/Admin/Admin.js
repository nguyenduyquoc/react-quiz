import SidebarAdmin from "./Sidebar";
import "./Admin.scss";
import HeaderAdmin from "./HeaderAdmin.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);

  const handleChangeCollapsed = () => {
    if (broken) {
      setCollapsed(!collapsed);
    } else {
      setToggled(!toggled);
    }
  };

  const setToggledIsFalse = () => {
    setToggled(false);
  };

  const handleChangeBroken = () => {
    setBroken(!broken);
    if (toggled) setToggled(!toggled);
    if (collapsed) setCollapsed(!collapsed);
  };

  console.log(`"collapsed is ${collapsed}`);
  console.log(`"toggled is ${toggled}`);
  console.log(`"broken is ${broken}`);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SidebarAdmin
          collapsed={collapsed}
          toggled={toggled}
          broken={broken}
          setToggledIsFalse={setToggledIsFalse}
          handleChangeBroken={handleChangeBroken}
        />
      </div>
      <div className="admin-content w-100">
        <div className="admin-header-root mx-4">
          <HeaderAdmin handleChangeCollapsed={handleChangeCollapsed} />
        </div>
        <div className="admin-main w-100">
          <div className="mx-4">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Admin;
