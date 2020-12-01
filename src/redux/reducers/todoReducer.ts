import { ADD_TODO } from '../actions/todosActions';

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
        todos: [
          ...state.todos,
          {
            title: action.payload.title,
            notes: action.payload.notes,
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
};

//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch

export default todoReducer;
