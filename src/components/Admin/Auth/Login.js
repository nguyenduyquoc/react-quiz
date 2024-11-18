import { useState } from "react";
import "./Login.scss";
import { postLogin } from "../../../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doLogin } from "../../../redux/action/accountAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // validate
    // call api
    let data = await postLogin(email, password, 1000);
    // console.log(data);

    if (data && +data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-root container-fluid">
      <div className="row">
        <div className="login-box col-10 col-md-7 col-lg-6 col-xl-4 mx-auto my-auto">
          <div className="login-header">
            <p className="login-title title-main">Yến Vy</p>
            <p className="login-title title-secondary">Hotel & Apartments</p>
          </div>
          <div className="login-content">
            <form
              className="login-form"
              autoComplete="off"
              onSubmit={handleLogin}
            >
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-field email-input"
                  placeholder="Nhập email hoặc số điện thoại ..."
                  autoComplete="off"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input-field password-input"
                  placeholder="Nhập password ..."
                  autoComplete="off"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-remember">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="remember-checkbox"
                />
                <label
                  htmlFor="remember"
                  className="remember-checkbox-label"
                ></label>
                <label htmlFor="remember" className="ms-2">
                  Remember this device
                </label>
              </div>
              <div className="form-button">
                <button
                  type="submit"
                  className="login-button"
                  disabled={isLoading}
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  className="login-button login-with-google"
                >
                  <i className="bi bi-google"></i>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
          <div className="login-footer ">
            <div className="my-2">
              Forgot password?{" "}
              <strong className="hotel-name">Click here</strong>
            </div>
            <div>
              © 2025 <strong className="hotel-name">YenVy</strong>, All Rights
              Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
