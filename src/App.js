import React from "react";
import Modal from "./components/Modal/Modal";
import "./components/Modal/Modal.css";
import Menu from "./components/Menu";

import BtnMenu from "./components/BtnMenu";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <BtnMenu />
        <Modal />
        <Menu />
      </Router>
    </>
  );
}

export default App;
