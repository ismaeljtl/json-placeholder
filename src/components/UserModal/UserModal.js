import React from "react";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";
import "./UserModal.css";

function UserModal({ isOpen, handleCloseModal, user }) {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className="UserModal">
        <h3>Información sobre {user.username}</h3>
        <div className="dropdown-divider"></div>
        <p>
          <strong>Nombre: </strong> {user.name}
        </p>
        <p>
          <strong>Email: </strong> {user.email}
        </p>
        <p>
          <strong>Teléfono: </strong> {user.phone}
        </p>
        <p>
          <strong>Website: </strong> {user.website}
        </p>

        <h5>Dirección</h5>
        <p>
          <strong>Ciudad: </strong> {user.address.city}
        </p>
        <p>
          <strong>Calle: </strong> {user.address.street}
        </p>
        <p>
          <strong>Suite: </strong> {user.address.suite}
        </p>
        <p>
          <strong>Código postal: </strong> {user.address.zipcode}
        </p>

        <h5>Compañía</h5>
        <p>
          <strong>Nombre: </strong> {user.company.name}
        </p>
        <p>
          <strong>Frase de enganche: </strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Bs: </strong> {user.company.bs}
        </p>
      </div>
      <div className="dropdown-divider"></div>
      <div className="text-right">
        <button onClick={handleCloseModal} className="btn btn-outline-primary">
          Cerrar
        </button>
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps, null)(UserModal);
