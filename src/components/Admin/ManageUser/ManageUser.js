import { useState } from "react";
import ModalCreateUser from "../fragment/ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "../fragment/TableUser";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-root">
      <div className="manage-user-title">
        Trang chủ / Quản lí User / Danh sách
      </div>
      <div className="manage-user-main">
        <div className="btn-add-new d-flex justify-content-between my-1">
          <div className="fs-3 fw-bold">User List</div>
          <button
            className="btn btn-dark"
            onClick={() => setShowModalCreateUser(true)}
          >
            Thêm người dùng
          </button>
        </div>
        <div className="list-user rounded mt-3 p-3">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
