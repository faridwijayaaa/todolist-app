/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todo-action";

function TodoInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    console.log(input);
    input.length > 0 ? dispatch(addTodo(input)) : "";
    setInput("");
  };

  return (
    <div className="block w-3/6 mx-auto">
      <h1 className={"text-3xl font-black my-7 text-center"}>
        What's the plan for today?
      </h1>
      <form className="flex justify-between mb-7">
        <input
          type="text"
          placeholder="What to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-lime-700/50 pl-5 w-10/12 pb-2 pt-4 rounded-md font-extrabold"
        />
        <button
          onClick={handleClick}
          className="bg-lime-700/75 px-5 pb-2 pt-4  rounded-md font-extrabold text-slate-100">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
