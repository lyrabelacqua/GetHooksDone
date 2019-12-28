import React from "react";
import { Todo, TodoTitle } from "./SingleTodo.styles";

export default ({ todo, toggleDoneStatus, deleteTodo }) => (
  <Todo>
    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => {
        toggleDoneStatus(todo.id);
      }}
    />
    <TodoTitle done={todo.done}>{todo.title}</TodoTitle>
    <button
      onClick={() => {
        deleteTodo(todo.id);
      }}
    >
      &times;
    </button>
  </Todo>
);
