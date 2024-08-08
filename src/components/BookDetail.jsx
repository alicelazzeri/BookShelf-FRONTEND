import { useParams } from "react-router-dom";

const books = [
  { id: 1, title: "Book 1", author: "Author 1", description: "Description 1" },
  { id: 2, title: "Book 2", author: "Author 2", description: "Description 2" },
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail-container">
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
