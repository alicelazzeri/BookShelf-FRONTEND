import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateBookModal = ({ show, onHide, book, onSave }) => {
  const [bookDetails, setBookDetails] = useState({
    ...book,
    bookCoverFile: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleFileChange = e => {
    setBookDetails({ ...bookDetails, bookCoverFile: e.target.files[0] });
  };

  const handleSave = async () => {
    try {
      await onSave(bookDetails); // Invoca il thunk `updateBook` con i dati del libro
      onHide(); // Nasconde il modal solo dopo che il libro è stato aggiornato correttamente
    } catch (error) {
      console.error("Failed to update book:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">Update Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2" controlId="bookTitle">
            <Form.Label className="mb-0 inputLabel">Book Title</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              name="bookTitle"
              value={bookDetails.bookTitle}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="bookAuthor">
            <Form.Label className="mb-0 inputLabel">Author</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              name="bookAuthor"
              value={bookDetails.bookAuthor}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="isbnCode">
            <Form.Label className="mb-0 inputLabel">ISBN Code</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              name="isbnCode"
              value={bookDetails.isbnCode}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="bookPlot">
            <Form.Label className="mb-0 inputLabel">Plot</Form.Label>
            <Form.Control
              className="modalInput"
              as="textarea"
              name="bookPlot"
              rows={3}
              value={bookDetails.bookPlot}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="bookCoverFile">
            <Form.Label className="mb-0 inputLabel">Book Cover</Form.Label>
            <Form.Control className="modalInput" type="file" name="bookCoverFile" onChange={handleFileChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="saveBtn" onClick={handleSave}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

UpdateBookModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    isbnCode: PropTypes.number.isRequired,
    addingDate: PropTypes.instanceOf(Date),
    deletingDate: PropTypes.instanceOf(Date),
    bookPlot: PropTypes.string.isRequired,
    completedReadings: PropTypes.number.isRequired,
    bookCoverUrl: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default UpdateBookModal;
