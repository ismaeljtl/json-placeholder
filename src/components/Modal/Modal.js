import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, isOpen, handleCloseModal }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={handleCloseModal} className="Modal__close-button">
          X
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
