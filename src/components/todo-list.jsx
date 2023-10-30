/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, statusTodo } from "../redux/actions/todo-action";
import { useState } from "react";

function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const { isEdit, setIsEdit } = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleStatus = (index) => {
    dispatch(statusTodo(index));
  };

  const handleEdit = (todo) => {
    dispatch(editTodo(todo));
    setIsEdit(true);
  };

  const filteredTodo = () => {
    if (activeFilter === "Completed") {
      return todos.filter((todo) => todo.status);
    } else if (activeFilter === "Active") {
      return todos.filter((todo) => !todo.status);
    }

    return todos;
  };

  const handleClick = (status) => {
    setActiveFilter(status);
  };

  const handleActive = () => {
    setActiveFilter("Active");
  };

  const handleComplete = () => {
    setActiveFilter("Completed");
  };

  return (
    <div className={"w-3/6 mx-auto"}>
      <div className="flex justify-center mb-5 gap-10">
        <button
          className="pb-1 pt-3 px-5 rounded-md focus:bg-lime-900 focus:text-slate-300 bg-lime-700/75 font-bold text-slate-100 "
          onClick={() => handleClick("All")}>
          All
        </button>
        <button
          className="pb-1 pt-3 px-5 rounded-md focus:bg-lime-900 focus:text-slate-300 bg-lime-700/75 font-bold text-slate-100 "
          onClick={() => handleClick("Active")}>
          Active
        </button>
        <button
          className="pb-1 pt-3 px-5 rounded-md focus:bg-lime-900 focus:text-slate-300 bg-lime-700/75 font-bold text-slate-100 "
          onClick={() => handleClick("Completed")}>
          Completed
        </button>
      </div>
      {filteredTodo().map((todo, index) => (
        <div
          key={todo.id}
          className="flex justify-between border-2 border-slate-400 px-5 pb-2 pt-4 text-slate-700 font-bold rounded-sm mb-5">
          <div>
            <input
              type="checkbox"
              name="checked"
              className="mr-5"
              onClick={() => handleStatus(index)}
            />
            <span className={todo.status ? "line-through" : ""}>
              {todo.value}
            </span>
          </div>
          <div className="">
            <button onClick={() => handleEdit(todo)} className="mx-5">
              🖋️
            </button>
            <button onClick={() => handleDelete(todo.id)}>✖️</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
