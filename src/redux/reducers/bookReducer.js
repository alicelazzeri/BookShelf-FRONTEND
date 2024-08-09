import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  INCREMENT_READINGS_SUCCESS,
  INCREMENT_READINGS_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  GENERATE_PDF_SUCCESS,
  GENERATE_PDF_FAILURE,
} from "../actions/index.js";

const initialState = {
  items: [],
  selectedBook: null,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return { ...state, items: action.payload, error: null };

    case GET_BOOKS_FAILURE:
      return { ...state, error: action.payload };

    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        items: state.items.map(book => (book.id === action.payload.id ? action.payload : book)),
        error: null,
      };

    case UPDATE_BOOK_FAILURE:
      return { ...state, error: action.payload };

    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        items: state.items.filter(book => book.id !== action.payload),
        error: null,
      };

    case DELETE_BOOK_FAILURE:
      return { ...state, error: action.payload };

    case INCREMENT_READINGS_SUCCESS:
      return {
        ...state,
        items: state.items.map(book => (book.id === action.payload.id ? action.payload : book)),
        error: null,
      };

    case INCREMENT_READINGS_FAILURE:
      return { ...state, error: action.payload };

    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        error: null,
      };

    case ADD_BOOK_FAILURE:
      return { ...state, error: action.payload };

    case GENERATE_PDF_SUCCESS:
      return { ...state, error: null };

    case GENERATE_PDF_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default bookReducer;
