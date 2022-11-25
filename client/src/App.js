import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Router>
    </Fragment>
  );
}

export default App;
