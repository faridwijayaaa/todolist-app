export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo(todo) {
  return {
    type: "EDIT_TODO",
    payload: todo,
  };
}

export function statusTodo(index) {
  return {
    type: "STATUS_TODO",
    payload: index,
  };
}
