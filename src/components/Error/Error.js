import React from "react";
import "./Error.css";

function Error({ message }) {
  return (
    <div className="Error">
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  );
}

export default Error;
