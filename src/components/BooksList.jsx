import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooksByUserId,
  incrementReadings,
  deleteBook,
  updateBook,
  addBook,
  generateBooksPDF,
} from "../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import unavailable from "../assets/images/unavailable.png";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import UpdateBookModal from "./UpdateBookModal";
import AddBookModal from "./AddBookModal";

const BooksList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const books = useSelector(state => state.books.items);
  const currentUser = useSelector(state => state.user.currentUser);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (userId) {
      dispatch(fetchBooksByUserId(userId));
    }
  }, [dispatch, userId]);

  const handleIncrementReadings = bookId => {
    dispatch(incrementReadings(bookId));
  };

  const handleDeleteBook = bookId => {
    dispatch(deleteBook(bookId));
  };

  const handleUpdateBook = (bookId, updatedBookData) => {
    dispatch(updateBook(bookId, updatedBookData));
  };

  const handleAddBook = newBookData => {
    dispatch(addBook(newBookData, userId));
  };

  const handleEditClick = book => {
    setSelectedBook(book);
    setShowUpdateModal(true);
  };

  const handleSaveChanges = updatedBook => {
    handleUpdateBook(updatedBook.id, updatedBook);
  };

  const handleAddNewBook = () => {
    setShowAddModal(true);
  };

  const handleDownloadPDF = () => {
    dispatch(generateBooksPDF(userId));
  };

  if (!currentUser) {
    return <div className="text-center mt-5">Please log in to view your books.</div>;
  }

  const formatDate = dateString => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <Container className="books-list">
      <h1 className="bookListTitle text-center my-5">
        Books List of{" "}
        <span className="orangeSpan">
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </h1>
      <div className="text-center mb-5">
        <p className="homeBody mb-0">
          Want to add a new book to your list? Click on the <span className="italicSpan">Add new book</span> button
          below to create one. <br />
          Otherwise,{" "}
          <span className="downloadPdfLink" onClick={handleDownloadPDF}>
            download the PDF
          </span>{" "}
          of your book list to keep track of your readings.
        </p>
        <button className="registerBtn mt-4" onClick={handleAddNewBook}>
          Add new book
        </button>
      </div>
      {Array.isArray(books) && books.length > 0 ? (
        <Row>
          {books.map(book => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="bookCard">
                <div className="bookCoverContainer">
                  <div
                    className="bookCoverBackground"
                    style={{
                      backgroundImage: `url(${book.bookCoverUrl ? book.bookCoverUrl : unavailable})`,
                    }}
                  />
                  <Card.Img
                    className="bookCover"
                    variant="top"
                    src={book.bookCoverUrl ? book.bookCoverUrl : unavailable}
                  />
                </div>
                <Card.Body className="cardBody">
                  <Card.Title className="bookTitle mb-3">{book.bookTitle}</Card.Title>
                  <Card.Subtitle className="bookAuthor mb-3">{book.bookAuthor}</Card.Subtitle>
                  <Card.Text className="bookPlot">{book.bookPlot}</Card.Text>
                  <Card.Text className="addingDate">Added on {formatDate(book.addingDate)}</Card.Text>
                  <Card.Text className="bookReadings mt-1">Completed Readings: {book.completedReadings}</Card.Text>

                  <div className="d-flex justify-content-evenly align-items-center gap-3">
                    <button className="readingsBtn" onClick={() => handleIncrementReadings(book.id)}>
                      Increment Readings
                    </button>

                    <div className="d-flex align-items-centers gap-2">
                      <button className="updateBtn" onClick={() => handleEditClick(book)}>
                        <FiEdit className="mb-1" />
                      </button>

                      <button className="deleteBtn" onClick={() => handleDeleteBook(book.id)}>
                        <AiOutlineDelete className="mb-1" />
                      </button>
                    </div>
                  </div>

                  <button className="bookCardButton mt-4">Check Book Details</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>
          <p>No books found.</p>
          <Button onClick={() => alert("Add Books functionality coming soon!")}>Add Books</Button>
        </div>
      )}

      {selectedBook && (
        <UpdateBookModal
          show={showUpdateModal}
          onHide={() => setShowUpdateModal(false)}
          book={selectedBook}
          onSave={handleSaveChanges}
        />
      )}

      <AddBookModal show={showAddModal} onHide={() => setShowAddModal(false)} onSave={handleAddBook} />
    </Container>
  );
};

export default BooksList;
