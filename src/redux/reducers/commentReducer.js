const initialState = {
  comments: [],
  cargando: false,
  error: null,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
        cargando: false,
      };

    case "GET_COMMENTS_BY_USER":
      return {
        ...state,
        comments: action.payload,
        cargando: false,
      };

    case "COMMENT_CARGANDO":
      return {
        ...state,
        cargando: true,
      };

    case "COMMENT_ERROR":
      return {
        ...state,
        error: action.payload,
        cargando: false,
      };

    default:
      return state;
  }
}
