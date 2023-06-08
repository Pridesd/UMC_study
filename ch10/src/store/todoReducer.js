const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const TOGGLE_TODO = "todo/TOGGLE_TODO";

export const addTodo = (todo) => ({ type: ADD_TODO, todo: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id: id });

const initialState = [];
let i = 0;
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: i++,
        todo: action.todo,
        done: false,
      });
    case DELETE_TODO:
      return state.filter((data) => data.id !== action.id);
    case TOGGLE_TODO:
      const newState = [...state];
      const index = newState.findIndex((e) => e.id === action.id);
      if (newState[index].done) newState[index].done = false;
      else newState[index].done = true;
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
