import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Countdown, Home } from "./pages"

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
