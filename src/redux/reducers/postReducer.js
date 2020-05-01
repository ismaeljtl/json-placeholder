const initialState = {
  posts: [],
  post: {
    userId: "",
    id: "",
    title: "",
    body: "",
  },
  cargando: false,
  spinner: false,
  error: null,
  modalIsOpen: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
        cargando: false,
        spinner: false,
      };

    case "GET_POSTS_BY_USER_ID":
      return {
        ...state,
        posts: action.payload,
        cargando: false,
        spinner: false,
      };

    case "DELETE_POST_BY_ID":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "CREATE_POST":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "UPDATE_POST":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "POST_ERROR":
      return {
        ...state,
        error: action.payload,
        cargando: false,
        spinner: false,
      };

    case "POST_CARGANDO":
      return {
        ...state,
        cargando: true,
      };

    case "POST_SPINNER":
      return {
        ...state,
        spinner: true,
      };

    case "HANDLE_OPEN_POST_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        post: action.payload,
        cargando: false,
        spinner: false,
      };

    case "HANDLE_CLOSE_POST_MODAL":
      return {
        ...state,
        modalIsOpen: false,
        post: {
          userId: "",
          id: "",
          title: "",
          body: "",
        },
        cargando: false,
        spinner: false,
      };

    default:
      return state;
  }
}
