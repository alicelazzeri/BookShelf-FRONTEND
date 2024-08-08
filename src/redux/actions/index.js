// CONSTANTS

const API = "http://localhost:8080/api";

// Loading spinner
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

// Users
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

// Books
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";
export const GET_BOOK_BY_ID_SUCCESS = "GET_BOOK_BY_ID_SUCCESS";
export const GET_BOOK_BY_ID_FAILURE = "GET_BOOK_BY_ID_FAILURE";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";

// ACTION CREATORS

// Loading spinner
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

// Users
export const setUser = user => ({ type: SET_USER, payload: user });
export const clearUser = () => ({ type: CLEAR_USER });
export const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, payload: users });
export const getUsersFailure = error => ({ type: GET_USERS_FAILURE, payload: error });
export const addUserSuccess = user => ({ type: ADD_USER_SUCCESS, payload: user });
export const addUserFailure = error => ({ type: ADD_USER_FAILURE, payload: error });

// Books
export const getBooksSuccess = books => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = error => ({ type: GET_BOOKS_FAILURE, payload: error });
export const getBookByIdSuccess = book => ({ type: GET_BOOK_BY_ID_SUCCESS, payload: book });
export const getBookByIdFailure = error => ({ type: GET_BOOK_BY_ID_FAILURE, payload: error });
export const addBookSuccess = book => ({ type: ADD_BOOK_SUCCESS, payload: book });
export const addBookFailure = error => ({ type: ADD_BOOK_FAILURE, payload: error });
export const updateBookSuccess = book => ({ type: UPDATE_BOOK_SUCCESS, payload: book });
export const updateBookFailure = error => ({ type: UPDATE_BOOK_FAILURE, payload: error });
export const deleteBookSuccess = bookId => ({ type: DELETE_BOOK_SUCCESS, payload: bookId });
export const deleteBookFailure = error => ({ type: DELETE_BOOK_FAILURE, payload: error });

// THUNKS

// Users
// Fetch all users
export const fetchAllUsers = () => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Add new user
export const addUser = user => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Failed to add user");
    const newUser = await response.json();
    dispatch(addUserSuccess(newUser));
  } catch (error) {
    dispatch(addUserFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Books
// Fetch all books
export const fetchBooks = () => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch("http://localhost:8080/api/books");
    const data = await response.json();
    dispatch(getBooksSuccess(data));
  } catch (error) {
    dispatch(getBooksFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch books by user ID
export const fetchBooksByUserId = userId => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/books?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch books");
    const books = await response.json();
    dispatch(getBooksSuccess(books));
  } catch (error) {
    dispatch(getBooksFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch book by ID
export const fetchBookById = bookId => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/books/${bookId}`);
    if (!response.ok) throw new Error("Failed to fetch book");
    const book = await response.json();
    dispatch(getBookByIdSuccess(book));
  } catch (error) {
    dispatch(getBookByIdFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Add a new book
export const addBook = (book, userId) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/books?userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) throw new Error("Failed to add book");
    const newBook = await response.json();
    dispatch(addBookSuccess(newBook));
  } catch (error) {
    dispatch(addBookFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Update an existing book
export const updateBook = (bookId, updatedBook) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    if (!response.ok) throw new Error("Failed to update book");
    const book = await response.json();
    dispatch(updateBookSuccess(book));
  } catch (error) {
    dispatch(updateBookFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Delete a book
export const deleteBook = bookId => async dispatch => {
  dispatch(startLoading());
  try {
    await fetch(`${API}/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(deleteBookSuccess(bookId));
  } catch (error) {
    dispatch(deleteBookFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};
