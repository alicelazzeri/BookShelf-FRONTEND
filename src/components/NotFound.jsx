import logo from "../assets/images/logo.png";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="notFoundContainer text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      <img src={logo} width={200} alt="Logo" className="notFoundLogo my-5" />
      <h1 className="notFoundTitle mt-1">PAGE NOT FOUND</h1>
      <p className="notFoundBody mx-5 my-5 text-center">
        We are sorry, but the page you were looking for does not seem to exist. Try searching for another page or go
        back to the homepage.
      </p>
      <Row>
        <Col className="text-center mb-5">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="homeBtn"
          >
            Go back to Homepage
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
