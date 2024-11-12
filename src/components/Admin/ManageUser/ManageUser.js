import { useState } from "react";
import ModalCreateUser from "../fragment/ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-root">
      <div className="manage-user-title">
        Trang chủ / Quản lí User / Danh sách
      </div>
      <div className="manage-user-main">
        <div className="btn-add-new">
          <button
            className="btn btn-dark"
            onClick={() => setShowModalCreateUser(true)}
          >
            Thêm người dùng
          </button>
        </div>
        <div className="list-user"></div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
