const ADD_TODO = 'todo/ADD_TODO';

const initialState = {
  todos: [
    {
      title: '',
      notes: '',
      completed: false,
    },
  ],
};

const todoReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        profile: action.payload,
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
