import { useState, useEffect } from "react";
import ModalCreateUser from "../fragment/ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "../fragment/TableUser";
import { getAllUser } from "../../../services/UserService";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUser] = useState([
    /*
    {
      id: 1,
      username: "hoangquoc293",
      email: "hoangquoc293@gmail.com",
      role: "USER",
    },
    {
      id: 1,
      username: "npngan255",
      email: "npngan255@gmail.com",
      role: "USER",
    },
    */
  ]);

  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUser(data.DT);
    }
  };

  // chạy sau khi component được render
  useEffect(() => {
    fetchListUser();
  }, []);

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
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
