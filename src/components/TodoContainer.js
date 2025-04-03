import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoDetails from "./TodoDetails";
const TodoContainer = () => {
  return (
    <div className="container">
      <Header />
      <InputTodo />
      <TodosList />
      <TodoDetails />
    </div>
  );
};
export default TodoContainer;
