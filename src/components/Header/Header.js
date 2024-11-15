import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const account = useSelector((state) => state.account.account_info);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

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
                  <NavDropdown.Item>Sign out</NavDropdown.Item>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
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
