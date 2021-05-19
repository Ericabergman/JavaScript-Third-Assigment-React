import React from "react";
import Modal from "./components/Modal/Modal";
import "./components/Modal/Modal.css";
import Menu from "./components/Menu";

import "./App.css";

const App = () => {
  return (
    <>
      <button className="menu_btn"> Open</button>
      <Modal />
      <Menu />
    </>
  );
};

export default App;
