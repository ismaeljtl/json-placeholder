// funcion para manejar errores HTTP
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export function getPosts() {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "POST_CARGANDO",
    });

    await fetch(`${BaseURL}/posts`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "POST_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  };
}

export function getPostsByUserId(id) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "POST_CARGANDO",
    });

    await fetch(`${BaseURL}/posts?userId=${id}`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "POST_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_POSTS_BY_USER_ID",
      payload: data,
    });
  };
}

export function deletePost(id) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "POST_SPINNER",
    });

    await fetch(`${BaseURL}/posts/${id}`, { method: "DELETE" })
      .then((resp) => handleErrors(resp))
      .then((resp) => {
        alert("El post ha sido eliminado con éxito");
      })
      .catch((err) => {
        dispatch({
          type: "POST_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "DELETE_POST_BY_ID",
    });
  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "POST_SPINNER",
    });

    await fetch(`${BaseURL}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => handleErrors(resp))
      .then((json) => alert("El post ha sido creado con éxito"))
      .catch((err) => {
        dispatch({
          type: "POST_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "CREATE_POST",
    });
  };
}

export function updatePost(post) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";

    dispatch({
      type: "POST_SPINNER",
    });

    await fetch(`${BaseURL}/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => handleErrors(resp))
      .then((json) => alert("El post ha sido actualizado con éxito"))
      .catch((err) => {
        dispatch({
          type: "USER_ERROR",
          payload: `Ha ocurrido un error, intente más tarde. ${err}`,
        });
      });

    dispatch({
      type: "UPDATE_POST",
    });
  };
}

export function handleOpenPostModal(post) {
  return {
    type: "HANDLE_OPEN_POST_MODAL",
    payload: post,
  };
}

export function handleClosePostModal() {
  return {
    type: "HANDLE_CLOSE_POST_MODAL",
  };
}
