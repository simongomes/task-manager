import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const todos = useSelector(({ todos }) => todos.todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
