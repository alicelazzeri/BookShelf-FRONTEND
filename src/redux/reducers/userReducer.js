import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_USER,
  CLEAR_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../actions/index.js";

const initialState = {
  users: [],
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case GET_USERS_FAILURE:
      return { ...state, error: action.payload };
    case SET_USER:
      return { ...state, currentUser: action.payload };
    case CLEAR_USER:
      return { ...state, currentUser: null };
    case ADD_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case ADD_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
