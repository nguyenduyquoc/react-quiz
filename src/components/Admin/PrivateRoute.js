import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

/**
 *
 * state={{ from: location }} được truyền vào Navigate để ghi nhớ trang mà người dùng muốn truy cập trước khi bị chuyển hướng.
 * Điều này giúp bạn dễ dàng chuyển hướng lại sau khi đăng nhập.
 *
 */
