import SidebarAdmin from "./Sidebar";
import "./Admin.scss";
import HeaderAdmin from "./HeaderAdmin.js";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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
    // console.log(">>> handleChangeBroken");
    if (!isFirstLoad) {
      setBroken(!broken);
      if (toggled) setToggled(!toggled);
      if (collapsed) setCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    // console.log(">>> run useEffect");

    setIsFirstLoad(false);
    const screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      //lg
      setBroken(false);
    } else {
      setBroken(true);
    }
  }, []);

  // console.log(`"collapsed is ${collapsed}`);
  // console.log(`"toggled is ${toggled}`);
  // console.log(`"broken is ${broken}`);

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
    </div>
  );
};

export default Admin;
