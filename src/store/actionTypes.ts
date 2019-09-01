export enum ActionTypes {
  // User - Authentication and etc.
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",

  // Paste and Editor
  FETCH_PASTE_START = "FETCH_PASTE_START",
  FETCH_PASTE_SUCCESS = "FETCH_PASTE_SUCCESS",
  FETCH_PASTE_FAIL = "FETCH_PASTE_FAIL",
  CREATE_PASTE = "CREATE_PASTE",
  FORK_PASTE = "FORK_PASTE",
}

export default ActionTypes;
