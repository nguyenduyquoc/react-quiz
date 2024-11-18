import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import { ReactComponent as DashboardIcon } from "../../assets/icons/sidebar/icon-sidebar-dashboard.svg";
import { ReactComponent as DutyIcon } from "../../assets/icons/sidebar/icon-sidebar-duty.svg";
import { ReactComponent as RoomIcon } from "../../assets/icons/sidebar/icon-sidebar-room.svg";
import { ReactComponent as BookingIcon } from "../../assets/icons/sidebar/icon-sidebar-booking.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/sidebar/icon-sidebar-users.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/icons/sidebar/icon-sidebar-employee.svg";
import { ReactComponent as ServiceAndEventIcon } from "../../assets/icons/sidebar/icon-sidebar-service.svg";
import { ReactComponent as PaymentIcon } from "../../assets/icons/sidebar/icon-sidebar-payment.svg";
import { ReactComponent as Logo } from "../../assets/icons/icon-logo.svg";

const SidebarAdmin = (props) => {
  const { collapsed, toggled } = props;

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => props.setToggledIsFalse()}
      onBreakPoint={() => props.handleChangeBroken()}
      breakPoint="lg"
    >
      <Menu>
        <MenuItem icon={<Logo />} href="/admin" className="header-sidebar">
          Q.HOTEL
        </MenuItem>
        <MenuItem
          icon={<DashboardIcon />}
          component={<Link to="/admin/dashboard" />}
        >
          Dashboard
        </MenuItem>
        <SubMenu label="Quản lí phòng" icon={<RoomIcon />}>
          <MenuItem>Danh sách phòng</MenuItem>
          <MenuItem>Loại phòng</MenuItem>
          <MenuItem>Tài sản phòng</MenuItem>
          <MenuItem>Tiện ích phòng</MenuItem>
          <MenuItem>Dịch vụ phòng</MenuItem>
        </SubMenu>
        <SubMenu label="Quản lí đặt phòng" icon={<BookingIcon />}>
          <MenuItem>Danh sách</MenuItem>
          <MenuItem>Yêu cầu đặc biệt</MenuItem>
          <MenuItem>Giữ phòng</MenuItem>
          <MenuItem>Lịch sử booking</MenuItem>
        </SubMenu>
        <MenuItem icon={<DutyIcon />} component={<Link to="/admin/duty" />}>
          Nhiệm vụ khẩn cấp
        </MenuItem>
        <SubMenu label="Quản lý nhân viên" icon={<EmployeeIcon />}>
          <MenuItem>Danh sách</MenuItem>
          <MenuItem>Chấm công</MenuItem>
          <MenuItem>Ca làm việc</MenuItem>
        </SubMenu>
        <SubMenu label="Quản lí khách hàng" icon={<UserIcon />}>
          <MenuItem component={<Link to="/admin/manage-users" />}>
            Danh sách
          </MenuItem>
          <MenuItem>Khách hàng thân thiết</MenuItem>
          <MenuItem>Yêu cầu đặc biệt</MenuItem>
          <MenuItem>Chương trình đặc biệt</MenuItem>
          <MenuItem>Đánh giá của khách hàng</MenuItem>
        </SubMenu>
        <SubMenu label="Dịch vụ, sự kiện" icon={<ServiceAndEventIcon />}>
          <MenuItem>Loại dịch vụ</MenuItem>
          <MenuItem>Danh sách</MenuItem>
          <MenuItem>Lịch sử</MenuItem>
        </SubMenu>
        <SubMenu label="Quiz" icon={<ServiceAndEventIcon />}>
          <MenuItem component={<Link to="/admin/manage-quizzes" />}>
            Danh sách
          </MenuItem>
          <MenuItem>Thêm mới</MenuItem>
        </SubMenu>

        <MenuItem icon={<PaymentIcon />} component={<Link to="/payment" />}>
          Hóa đơn và thanh toán
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarAdmin;
