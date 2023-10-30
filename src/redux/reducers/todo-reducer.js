/* eslint-disable no-case-declarations */
const initState = {
  todos: [
    { id: 1, value: "Clean food", status: false },
    { id: 2, value: "drink more water", status: true },
  ],
};

function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: state.todos.length + 1,
        value: action.payload,
        status: false,
      };

      const cloneTodos = [...state.todos, newTodo];

      return {
        todos: cloneTodos,
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: filterTodo,
      };

    case "EDIT_TODO":
      const editTodo = [...state.todos];
      const indexTodo = editTodo.findIndex(
        (item) => item.id === action.payload.id
      );
      return indexTodo;

    case "STATUS_TODO":
      const activeTodosClone = [...state.todos];
      activeTodosClone[action.payload].status =
        !activeTodosClone[action.payload].status;

      return {
        todos: [...activeTodosClone],
      };

    default:
      return state;
  }
}

export default todoReducer;
