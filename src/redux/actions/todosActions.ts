export const ADD_TODO = 'todo/ADD_TODO';

export const addTodo = (payload: { title: string; notes: string }) => ({
  type: ADD_TODO,
  payload,
});
