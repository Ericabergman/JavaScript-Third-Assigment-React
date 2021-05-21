import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggle} className="btn_nav">
        Open Modal
      </button>

      {modal && (
        <div className="container-modal">
          <div className="overlay"></div>
          <div className="modal_content">
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              beatae accusantium asperiores repellendus, neque, itaque ducimus,
              nihil tempora quisquam fugit assumenda nobis odio fuga ipsam
              reiciendis. Voluptate ipsam neque repudiandae.
            </p>
            <button className="close" onClick={toggle}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
