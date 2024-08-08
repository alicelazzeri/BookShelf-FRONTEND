import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../redux/actions/index.js";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.selectedBook);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  return (
    <div>
      {book ? (
        <>
          <h1>{book.bookTitle}</h1>
          <p>Author: {book.bookAuthor}</p>
          <p>ISBN: {book.isbnCode}</p>
          <p>Plot: {book.bookPlot}</p>
          <p>Completed Readings: {book.completedReadings}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
