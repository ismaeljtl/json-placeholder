import React from "react";
import "./User.css";
import Avatars from "@dicebear/avatars";
import sprites from "@dicebear/avatars-male-sprites";
import { Link, withRouter } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

function User({ users, handleOpenModal, deleteUser, history }) {
  let options = { base64: true };
  let avatars = new Avatars(sprites, options);

  return (
    <div className="card-columns User">
      {users.map((user) => (
        <div className="card mb-3" key={user.id}>
          <Dropdown id={user.id} delete={deleteUser} />
          <div className="row no-gutters">
            <div className="col-4">
              <img
                src={avatars.create(user.email)}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <div className="card-text">
                  <p>
                    <strong>Nombre: </strong>
                    {user.name}
                  </p>
                  <p>
                    <strong>Ciudad: </strong>
                    {user.address.city}
                  </p>
                  <p>
                    <strong>Sitio web: </strong>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"http://" + user.website}
                    >
                      {user.website}
                    </a>
                  </p>
                  <Link
                    to={`/post/${user.id}`}
                    type="button"
                    className="btn btn-outline-success mt-2 mr-2"
                  >
                    Ver posts
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleOpenModal(user)}
                    className="btn btn-outline-info mt-2"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="card card-agregar"
        onClick={() => history.push(`/userForm/0`)}
      >
        <div className="plus">
          <strong>
            <h3>+</h3>
          </strong>
        </div>
        <h3>Agregar Usuario</h3>
      </div>
    </div>
  );
}

export default withRouter(User);
