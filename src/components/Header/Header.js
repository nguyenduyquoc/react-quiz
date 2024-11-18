import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { postLogout } from "../../services/UserService";
import { doLogout } from "../../redux/action/accountAction";

const Header = () => {
  const account = useSelector((state) => state.account.account_info);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    // console.log("email", account.email);
    // console.log("refresh_token", account.refresh_token);

    let res = await postLogout(account.email, account.refresh_token);
    // console.log(res);

    if (res.EC === 0) {
      dispatch(doLogout());
      navigate("/");
    }
  };

  console.log("isAuthenticated", isAuthenticated);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Q.HOTEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button className="btn btn-login" onClick={() => handleLogin()}>
                  Log in
                </button>
                <button className="btn btn-signup">Sign up</button>
              </>
            ) : (
              <>
                <NavDropdown title="Common" id="basic-nav-dropdown">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
