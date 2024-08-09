import { Container, Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/actions/index.js";

const BookShelfNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(`/user/${currentUser.id}/books`);
    }
  }, [currentUser, navigate]);

  const handleLogout = () => {
    dispatch(clearUser());
    setShowOffcanvas(false);
    navigate("/");
  };

  return (
    <>
      {["lg"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="px-4 navbar-dark ">
          <Container fluid>
            <Link to="/" className="navLink appTitle">
              <Navbar.Brand className="navbarBrand mt-2">
                <img src={logo} id="navbarLogo" alt="Brand logo" width={90} height={90} />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle
              className="custom-toggler"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              className="navbarOffcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton className="closeBtn">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navbarBrand">
                  <div className="d-flex">
                    <Link to="/" className="navLink">
                      <img src={logo} id="navbarLogo" alt="Brand logo" width={80} height={80} className="me-3" />
                    </Link>
                    <div className="mt-3">
                      <span className="titleOffCanvas">
                        <span className="orangeSpan">Book</span>
                        <span className="blueSpan">Shelf</span>
                      </span>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 ms-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="link" className="loginLink p-0 icon-hover-container">
                      <PiUserCircleDuotone className="icon-hover accountIcon" size={35} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdownMenu">
                      {currentUser ? (
                        <>
                          <div className="text-center my-2">
                            <img className="rounded-circle" src={currentUser.avatarUrl} alt="User Avatar" />
                          </div>
                          <Dropdown.Item className="dropdownItem navLink" as="div">
                            Hi, {currentUser.firstName} {currentUser.lastName}
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdownItem" as="div">
                            <Link className="navLink" to={`/user/${currentUser.id}/books`}>
                              My Books
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdownItem navLink logoutBtn" as="div" onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </>
                      ) : (
                        <Dropdown.Item className="dropdownItem" as="div">
                          <Link className="navLink" to="/login">
                            Login
                          </Link>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default BookShelfNavbar;
