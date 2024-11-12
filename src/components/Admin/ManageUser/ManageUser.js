import ModalCreateUser from "../fragment/ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-root">
      <div className="manage-user-title my-2">
        Trang chủ / Quản lí User / Danh sách
      </div>
      <div className="manage-user-main">
        <div className="d-flex justify-content-end">
          <ModalCreateUser />
        </div>
        <div className="list-user"></div>
      </div>
    </div>
  );
};

export default ManageUser;
