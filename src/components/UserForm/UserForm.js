import React from "react";

function UserForm(props) {
  return (
    <div className="UserForm">
      <div className="row">
        <div className="offset-md-3 col-md-6 col-12">
          <div className="img-container">
            <img
              src={props.avatar.create(props.user.email)}
              className="card-img"
              alt="..."
            />
          </div>
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                onChange={props.onChange}
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={props.user.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                onChange={props.onChange}
                type="text"
                name="username"
                className="form-control"
                id="username"
                value={props.user.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                onChange={props.onChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={props.user.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono de contacto</label>
              <input
                onChange={props.onChange}
                type="tel"
                name="phone"
                className="form-control"
                id="phone"
                value={props.user.phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Sitio web</label>
              <input
                onChange={props.onChange}
                type="text"
                name="website"
                className="form-control"
                id="website"
                value={props.user.website}
              />
            </div>
            <div className="col text-center">
              <button type="submit" className="btn btn-primary mb-4">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
