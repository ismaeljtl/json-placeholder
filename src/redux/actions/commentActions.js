// funcion para manejar errores HTTP
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export function getComments() {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "COMMENT_CARGANDO",
    });

    await fetch(`${BaseURL}/comments`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "COMMENT_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_COMMENTS",
      payload: data,
    });
  };
}

export function getCommentsByUser(id) {
  return async (dispatch, getState) => {
    const BaseURL = "https://jsonplaceholder.typicode.com";
    let data;

    dispatch({
      type: "COMMENT_CARGANDO",
    });

    await fetch(`${BaseURL}/comments?userId=${id}`)
      .then((resp) => handleErrors(resp))
      .then((resp) => (data = resp))
      .catch((err) => {
        dispatch({
          type: "COMMENT_ERROR",
          payload: "Ha ocurrido un error, intente más tarde.",
        });
      });

    dispatch({
      type: "GET_COMMENTS_BY_USER",
      payload: data,
    });
  };
}
