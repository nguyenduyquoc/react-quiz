import "./Login.scss";

const Login = (props) => {
  return (
    <div className="login-page container-fluid">
      <div className="row">
        <div className="login-box col-10 col-md-7 col-lg-6 col-xl-4 mx-auto my-auto">
          <div className="login-header">
            <p className="login-title title-main">Yến Vy</p>
            <p className="login-title title-secondary">Hotel & Apartments</p>
          </div>
          <div className="login-content">
            <form className="login-form" autocomplete="off">
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-field email-input"
                  placeholder="Nhập email hoặc số điện thoại ..."
                  autoComplete="off"
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
                  class="remember-checkbox-label"
                ></label>
                <label htmlFor="remember" className="ms-2">
                  Remember this device
                </label>
              </div>
              <div className="form-button">
                <button type="submit" className="login-button">
                  SIGN IN
                </button>
                <button
                  type="submit"
                  className="login-button login-with-google"
                >
                  <i className="bi bi-google"></i>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
          <div className="login-footer">
            © 2025 <strong className="hotel-name">YenVy</strong>, All Rights
            Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
