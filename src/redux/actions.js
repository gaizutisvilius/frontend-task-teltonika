import * as actionTypes from './actionTypes';

export const setData = (data) => {
  return {
    type: actionTypes.SET_DATA,
    data: {
      users: data.users,
      categories: data.categories,
    },
  };
};

export const setDataFail = () => {
  return {
    type: actionTypes.SET_DATA_FAIL,
  };
};

export const addUserStart = () => {
  return {
    type: actionTypes.ADD_USER_START,
  };
};

export const addUserSuccess = (newUser) => {
  return {
    type: actionTypes.ADD_USER_SUCCESS,
    newUser,
  };
};

export const addUserFail = () => {
  return {
    type: actionTypes.ADD_USER_FAIL,
  };
};

export const removeUser = (id) => {
  return {
    type: actionTypes.REMOVE_USER,
    id,
  };
};

export const removeUsers = (ids) => {
  return {
    type: actionTypes.REMOVE_USERS,
    ids,
  };
};

export const searchUsers = (searchText) => {
  return {
    type: actionTypes.SEARCH_USERS,
    searchText,
  };
};

export const addCategoryStart = () => {
  return {
    type: actionTypes.ADD_CATEGORY_START,
  };
};

export const addCategorySuccess = (newCategory) => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    newCategory,
  };
};

export const addCategoryFail = () => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
  };
};

export const showAlert = ({ bool, severity, msg }) => {
  return {
    type: actionTypes.SHOW_ALERT,
    bool,
    severity,
    msg,
  };
};

export const hideAlert = () => {
  return {
    type: actionTypes.HIDE_ALERT,
    bool: false,
  };
};
