// funcion para manejar errores HTTP
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export function getUsers() {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "USER_CARGANDO",
    });

    await fetch(`${BaseURL}/users`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
}

export function getUserById(id) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "USER_CARGANDO",
    });

    await fetch(`${BaseURL}/users/${id}`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_USER_BY_ID",
      payload: data,
    });
  };
}

export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user,
  };
}

export function deleteUser(id) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "USER_SPINNER",
    });

    await fetch(`${BaseURL}/users/${id}`, { method: "DELETE" })
      .then((resp) => handleErrors(resp))
      .then((resp) => {
        alert("El usuario ha sido eliminado con éxito");
      })
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "DELETE_USER_BY_ID",
    });
  };
}

export function createUser(user) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "USER_SPINNER",
    });

    await fetch(`${BaseURL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => handleErrors(resp))
      .then((json) => alert("El usuario ha sido creado con éxito"))
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "CREATE_USER",
    });
  };
}

export function updateUser(user) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "USER_SPINNER",
    });

    await fetch(`${BaseURL}/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => handleErrors(resp))
      .then((json) => alert("El usuario ha sido actualizado con éxito"))
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: `Ha ocurrido un error, intente más tarde. ${err}`,
        });
      });

    dispatch({
      type: "UPDATE_USER",
    });
  };
}

export function handleOpenUserModal(user) {
  return {
    type: "HANDLE_OPEN_USER_MODAL",
    payload: user,
  };
}

export function handleCloseUserModal() {
  return {
    type: "HANDLE_CLOSE_USER_MODAL",
  };
}
