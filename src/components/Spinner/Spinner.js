import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="Spinner">
      <div className="Spinner-container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="mt-4">Procesando...</h3>
      </div>
    </div>
  );
}

export default Spinner;
