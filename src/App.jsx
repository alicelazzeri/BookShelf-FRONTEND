import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookShelfNavbar from "./components/BookShelfNavbar";
import BookShelfFooter from "./components/BookShelfFooter";
import NotFound from "./components/NotFound";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import TopScrollBtn from "./components/TopScrollBtn";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
import LoginPage from "./components/LoginPage";
import BooksList from "./components/BooksList";

const App = () => {
  const isLoading = useSelector(state => state.loading.isLoading);

  return (
    <div className="App">
      {isLoading && <LoadingSpinner />}
      <BrowserRouter>
        <ScrollToTop />
        <BookShelfNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:userId/books" element={<BooksList />} />
        </Routes>
        <BookShelfFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
};

export default App;
