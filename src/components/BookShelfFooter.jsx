import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const BookShelfFooter = () => {
  return (
    <>
      <footer id="footer">
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-start align-items-md-center px-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <Link className="navLink" to="/">
              <img src={logo} alt="Logo pic" width={50} height={50} className="mb-2 mb-md-0" />
            </Link>
            <div className="d-flex flex-column justify-content-right">
              <p className="footerTitle mt-md-0 mb-0 ms-md-2">
                Book<span className="blueSpan">Shelf</span>
              </p>
            </div>
          </div>
          <p className="copyright mt-2 mt-md-0 mb-0 me-5">&#169; 2024 BookShelf | Alice Lazzeri</p>
        </div>
      </footer>
    </>
  );
};

export default BookShelfFooter;
