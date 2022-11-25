import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Countdown, Home } from "./pages";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      <Router>
        <Header openModal={openModal} setOpenModal={setOpenModal} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home openModal={openModal} setOpenModal={setOpenModal} />}
          />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Fragment>
  );
}

export default App;
