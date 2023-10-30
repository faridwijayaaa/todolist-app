import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

function App() {
  return (
    <>
      <div className={"md-container md:mx-auto mt-16"}>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
