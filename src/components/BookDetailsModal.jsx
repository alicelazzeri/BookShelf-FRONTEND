import { Modal, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const BookDetailsModal = ({ show, onHide, book }) => {
  if (!book) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">{book.bookTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img className="modalCover" src={book.bookCoverUrl || "unavailable.png"} alt="Book Cover" />
          </Col>
          <Col className="modalColumn" md={6}>
            <h6 className="modalInfo author">Author</h6>
            <p className="modalSubInfo">{book.bookAuthor}</p>
            <h6 className="modalInfo">Plot</h6>
            <p className="modalSubInfo plot">{book.bookPlot}</p>
            <h6 className="modalInfo">ISBN Code</h6>
            <p className="modalSubInfo">{book.isbnCode}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

BookDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  book: PropTypes.object,
};

export default BookDetailsModal;
