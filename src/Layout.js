import App from "./App";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import ManageUser from "./components/Admin/ManageUser/ManageUser";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Login from "./components/Admin/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";
import NotFound from "./components/NotFound";
import ManageQuiz from "./components/Admin/ManageQuiz/ManageQuiz";
import { Suspense } from "react";
import PrivateRoute from "./components/Admin/PrivateRoute";

const Layout = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<ListQuiz />} />
          <Route path="/quiz/:id" element={<DetailQuiz />} />
        </Route>
        {/* <Route path="admin" element={<Admin />}> */}
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/manage-users" element={<ManageUser />} />
          <Route path="/admin/manage-quizzes" element={<ManageQuiz />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  );
};

export default Layout;
