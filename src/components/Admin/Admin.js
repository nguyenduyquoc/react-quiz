import SidebarAdmin from "./Sidebar";
import "./Admin.scss";
import HeaderAdmin from "./HeaderAdmin.js";
import { useState } from "react";

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
        <div className="content w-100">
          <div className="mx-4">Content</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
