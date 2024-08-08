import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookShelfNavbar from "./components/BookShelfNavbar";
import BookShelfFooter from "./components/BookShelfFooter";
import NotFound from "./components/NotFound";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import TopScrollBtn from "./components/TopScrollBtn";
import LoginPage from "./components/LoginPage";
import BookDetail from "./components/BookDetail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <BookShelfNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BookShelfFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
};

export default App;
