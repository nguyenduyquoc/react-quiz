import { useState, useEffect } from "react";
import ModalCreateUser from "../fragment/ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "../fragment/TableUser";
import {
  getAllUser,
  getAllUserWithPaginate,
} from "../../../services/UserService";
import ModalUpdateUser from "../fragment/ModalUpdateUser";
import ModalDeleteUser from "../fragment/ModalDeleteUser";
import TableUserPaginate from "../fragment/TableUserPaginate";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
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
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});

  const LIMIT = 4;
  const [pageCount, setPageCount] = useState(0);

  const openUpdateUserModal = (user) => {
    setShowModalUpdateUser(true);
    setUserUpdate(user);
  };

  const openDeleteUserModal = (user) => {
    setShowModalDeleteUser(true);
    setUserDelete(user);
  };

  const resetUserUpdate = () => {
    setUserUpdate({});
  };

  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUser(data.DT);
    }
  };

  const fetchListUserWithPaginate = async (page) => {
    let data = await getAllUserWithPaginate(page, LIMIT);
    if (data.EC === 0) {
      setListUser(data.DT.users);
      setPageCount(data.DT.totalPages);
    }
  };

  // chạy sau khi component được render
  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaginate(1);
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
          {/* <TableUser
            listUsers={listUsers}
            openUpdateUserModal={openUpdateUserModal}
            openDeleteUserModal={openDeleteUserModal}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            openUpdateUserModal={openUpdateUserModal}
            openDeleteUserModal={openDeleteUserModal}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          userUpdate={userUpdate}
          fetchListUser={fetchListUser}
          resetUserUpdate={resetUserUpdate}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          userDelete={userDelete}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
