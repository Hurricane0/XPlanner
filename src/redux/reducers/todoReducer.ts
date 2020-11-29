const SET_CURRENT_PROFILE = 'profile/SET_CURRENT_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

const initialState = {
  posts: [],
  profile: null,
  userStatus: '',
};

const todoReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.payload,
      };
    default:
      return state;
  }
};

//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const setCurrentProfile = (payload: any) => ({
  type: SET_CURRENT_PROFILE,
  payload,
});
export const setUserStatus = (payload: any) => ({
  type: SET_USER_STATUS,
  payload,
});

export default todoReducer;
