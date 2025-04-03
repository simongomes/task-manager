import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_STATUS, DELETE_TODO } from "../store/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = todo;

  const handleStatusChange = (id) => {
    dispatch({ type: CHANGE_STATUS, payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleStatusChange(id)}
      />
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

export default TodoItem;
