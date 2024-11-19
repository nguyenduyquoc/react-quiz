import "./HeaderAdmin.scss";
import avatar from "../../assets/imgs/avatar-real.png";
import { NavDropdown } from "react-bootstrap";
import { useTranslation, Trans } from "react-i18next";

import language_vi from "../../assets/imgs/language-vi.png";
import language_en from "../../assets/imgs/language-en.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../../redux/action/accountAction";
import { postLogout } from "../../services/UserService";

const HeaderAdmin = (props) => {
  const { t, i18n } = useTranslation();

  const account = useSelector((state) => state.account.account_info);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLogout = async () => {
    let res = await postLogout(account.email, account.refresh_token);

    if (res.EC === 0) {
      dispatch(doLogout());
      navigate("/");
    }
  };

  return (
    <div className="admin-header-container d-flex justify-content-between align-items-center py-2">
      <div className="admin-header-toggle">
        <button id="collapse" onClick={() => props.handleChangeCollapsed()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-stroke"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3"></path>
            <path
              d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z"
              fill="var(--accent-color)"
            ></path>
            <path d="M15 12h-8"></path>
            <path d="M10 9l-3 3l3 3"></path>
          </svg>
        </button>
      </div>
      <div className="admin-header-search-form d-none d-md-inline-block">
        <input
          type="text"
          name="header-admin-search-input"
          id="header-admin-search-input"
          placeholder="Search here ..."
        />
        <button className="btn">
          <svg
            className="svg-stroke search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </div>
      <div className="admin-header-menu d-flex align-items-center gap-3">
        <div className="admin-header-menu-list d-flex gap-2">
          <div className="admin-header-menu-item notification">
            <svg
              className="svg-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
              <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path>
              <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path>
            </svg>
            <span className="number">99</span>
          </div>
          <div className="admin-header-menu-item setting">
            <svg
              className="svg-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            </svg>
          </div>
          <div className="admin-header-menu-item language">
            <NavDropdown
              title={
                <svg
                  className="svg-stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              }
              id="basic-nav-dropdown-language"
            >
              <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
                Việt Nam
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
                English
              </NavDropdown.Item>
            </NavDropdown>
            <img
              className="language_selected"
              src={i18n.language === "vi" ? language_vi : language_en}
              alt="language"
            />
          </div>
        </div>
        <div className="gap"></div>
        <div className="employee-info">
          <NavDropdown
            title={
              <div className="d-flex justify-content-center align-items-center gap-2">
                <img className="employee-avatar" src={avatar} alt="avatar" />
                <p className="mb-1">{account.username}</p>
              </div>
            }
            id="basic-nav-dropdown-language"
          >
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLogout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
