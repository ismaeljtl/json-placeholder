const initialState = {
  users: [],
  user: {
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    email: "",
    id: "",
    name: "",
    phone: "",
    username: "",
    website: "",
  },
  cargando: false,
  spinner: false,
  error: null,
  modalIsOpen: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        cargando: false,
        spinner: false,
      };

    case "GET_USER_BY_ID":
      return {
        ...state,
        user: action.payload,
        cargando: false,
        spinner: false,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        cargando: false,
        spinner: false,
      };

    case "DELETE_USER_BY_ID":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "CREATE_USER":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "UPDATE_USER":
      return {
        ...state,
        cargando: false,
        spinner: false,
      };

    case "HANDLE_OPEN_USER_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        user: action.payload,
        cargando: false,
        spinner: false,
      };

    case "HANDLE_CLOSE_USER_MODAL":
      return {
        ...state,
        modalIsOpen: false,
        user: {
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: "",
            },
          },
          company: {
            name: "",
            catchPhrase: "",
            bs: "",
          },
          email: "",
          id: "",
          name: "",
          phone: "",
          username: "",
          website: "",
        },
        cargando: false,
        spinner: false,
      };

    case "USER_CARGANDO":
      return {
        ...state,
        cargando: true,
      };

    case "USER_SPINNER":
      return {
        ...state,
        spinner: true,
      };

    case "USER_ERROR":
      return {
        ...state,
        error: action.payload,
        cargando: false,
        spinner: false,
      };

    default:
      return state;
  }
}
