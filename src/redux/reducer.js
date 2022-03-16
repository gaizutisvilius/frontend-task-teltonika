import * as actionTypes from './actionTypes';

const initialState = {
  data: {
    loading: false,
    error: null,
    users: [],
    categories: [],
    isSearchActive: false,
    foundUsers: [],
  },
  addUser: {
    loading: false,
    error: null,
    data: null,
  },
  addCategory: {
    loading: false,
    error: null,
    data: null,
  },
  alert: {
    show: false,
    severity: 'info',
    msg: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          error: false,
          users: [...action.data.users],
          categories: [...action.data.categories],
        },
      };

    case actionTypes.SET_DATA_FAIL:
      return {
        ...state,
        data: {
          ...state.data,
          error: true,
        },
      };

    case actionTypes.ADD_USER_START:
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: true,
          error: null,
        },
      };

    case actionTypes.ADD_USER_SUCCESS:
      const emailIsUsed = state.data.users.find((user) =>
        user.email === action.newUser.email ? true : false
      );
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          error: null,
          data: { ...action.newUser },
        },
        data: {
          ...state.data,
          loading: false,
          users: emailIsUsed
            ? [...state.data.users]
            : [...state.data.users, { ...action.newUser }],
        },
      };

    case actionTypes.ADD_USER_FAIL:
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          error: true,
        },
      };

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          users: state.data.users.filter((user) => user.id !== action.id),
        },
      };

    case actionTypes.REMOVE_USERS:
      const ids = new Set(action.ids);
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          users: state.data.users.filter((user) => !ids.has(user.id)),
        },
      };

    case actionTypes.SEARCH_USERS:
      const searchValue = action.searchText.toLowerCase();
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          isSearchActive: !!action.searchText.length > 0 || false,
          foundUsers: state.data.users.filter((user) => {
            return (
              user.name.toLowerCase().search(searchValue) !== -1 ||
              user.lastname.toLowerCase().search(searchValue) !== -1 ||
              user.gender.toLowerCase().search(searchValue) !== -1 ||
              user.age.toString().toLowerCase().search(searchValue) !== -1 ||
              user.email.toLowerCase().search(searchValue) !== -1 ||
              user.category.toLowerCase().search(searchValue) !== -1
            );
          }),
        },
      };

    case actionTypes.ADD_CATEGORY_START:
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          loading: true,
          error: null,
        },
      };

    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          loading: false,
          error: null,
          data: { ...action.newCategory },
        },
        data: {
          ...state.data,
          loading: false,
          categories: [...state.data.categories, { ...action.newCategory }],
        },
      };

    case actionTypes.ADD_CATEGORY_FAIL:
      return {
        ...state,
        addCategory: {
          ...state.addCategory,
          loading: false,
          error: true,
        },
      };

    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          show: action.bool,
          severity: action.severity,
          msg: action.msg,
        },
      };

    case actionTypes.HIDE_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          show: action.bool,
        },
      };

    default:
      return state;
  }
};

export default reducer;
