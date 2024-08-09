import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const AddBookModal = ({ show, onHide, onSave }) => {
  const [bookData, setBookData] = useState({
    bookTitle: "",
    bookAuthor: "",
    isbnCode: "",
    addingDate: "",
    deletingDate: "",
    bookPlot: "",
    completedReadings: 0,
    bookCoverFile: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleFileChange = e => {
    setBookData({ ...bookData, bookCoverFile: e.target.files[0] });
  };

  const handleSave = async () => {
    try {
      await onSave(bookData); // Invoca il thunk `addBook` con i dati del libro
      onHide(); // Nasconde il modal solo dopo che il libro è stato salvato correttamente
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2" controlId="bookTitle">
            <Form.Label className="inputLabel mb-0">Book Title</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              placeholder="Enter book title"
              name="bookTitle"
              value={bookData.bookTitle}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="bookAuthor">
            <Form.Label className="inputLabel mb-0">Book Author</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              placeholder="Enter book author"
              name="bookAuthor"
              value={bookData.bookAuthor}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="isbnCode">
            <Form.Label className="inputLabel mb-0">ISBN Code</Form.Label>
            <Form.Control
              className="modalInput"
              type="text"
              placeholder="Enter ISBN code"
              name="isbnCode"
              value={bookData.isbnCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="bookPlot">
            <Form.Label className="inputLabel mb-0">Book Plot</Form.Label>
            <Form.Control
              className="modalInput"
              placeholder="Enter book plot"
              as="textarea"
              rows={3}
              name="bookPlot"
              value={bookData.bookPlot}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="bookCoverFile">
            <Form.Label className="inputLabel mb-0">Book Cover</Form.Label>
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

AddBookModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddBookModal;
