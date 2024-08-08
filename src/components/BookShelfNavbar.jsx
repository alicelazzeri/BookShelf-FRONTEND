import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";

const BookShelfNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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
                  <Link to="/" className="navLink" onClick={() => setShowOffcanvas(false)}>
                    Home
                  </Link>
                  <Link to="/books" className="navLink" onClick={() => setShowOffcanvas(false)}>
                    My Books
                  </Link>
                  <Link to="/profile" className="navLink" onClick={() => setShowOffcanvas(false)}>
                    <PiUserCircleDuotone className="icon-hover accountIcon" size={30} />
                  </Link>
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
