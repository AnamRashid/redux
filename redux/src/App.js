import "./App.css";
import { TodoInput } from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;