import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const BtnMenu = () => {
  const [click, setClick] = React.useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <>
      <button onClick={clickHandler} className="Menu_btn"></button>

      {click && (
        <div>
          <button className="menu_btn" onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}
    </>
  );
};

export default BtnMenu;
