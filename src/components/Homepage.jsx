/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";
import BookAnimation from "./BookAnimation";

const Homepage = () => {
  return (
    <Container className="text-center">
      <h1 className="homeTitle mt-5 mb-3">
        {" "}
        <span className="orangeSpan">Book</span>Shelf
      </h1>
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <blockquote className="blockquote text-center">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-start">
                <ImQuotesLeft className="d-flex quoteIcon" />
                <p className="mb-0 quotation">
                  I do believe something very magical can happen when you read a good book.{" "}
                </p>
                <footer className="blockquote-footer blockquoteFooter">J.K. Rowling</footer>
              </div>
            </div>
          </blockquote>
        </Col>
        <hr />
        <div className="d-flex flex-column justify-content-between align-items-center">
          <p className="homeBody my-3">
            Discover, organize, and cherish your favorite books all in one place. Whether you're adding new reads,
            updating your collection, or diving into book details, BookShelf helps you keep track of your literary
            journey. <br /> Enjoy!
          </p>
          <BookAnimation />
        </div>
      </Row>
    </Container>
  );
};

export default Homepage;
