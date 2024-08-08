// CONSTANTS

//const API = "http://localhost:8080/api";

// Loading spinner
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

// ACTION CREATORS

// Loading spinner
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

// THUNKS
