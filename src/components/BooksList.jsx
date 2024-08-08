import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/index.js";

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (!Array.isArray(books)) {
    return <div>No books found.</div>;
  }

  return (
    <div className="books-list">
      <h1>My Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.bookTitle}</h2>
            <p>{book.bookAuthor}</p>
            <p>{book.bookPlot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
