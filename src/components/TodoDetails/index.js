import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Tags from "./Tags";
import Assignee from "./Assignee";
import "./TodoDetails.css";
import {
  UPDATE_ACTIVE_TODO_STATUS,
  UPDATE_ACTIVE_TODO_DESCRIPTION,
  RESET_ACTIVE_TODO,
  UPDATE_TODO,
} from "../../store/actions";

const TodoDetails = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector(({ todos }) => todos.selectedTodo);

  const handleUpdateActiveTodoStatus = () => {
    dispatch({ type: UPDATE_ACTIVE_TODO_STATUS });
  };

  const handleUpdateActiveTodoDescription = (e) => {
    dispatch({
      type: UPDATE_ACTIVE_TODO_DESCRIPTION,
      payload: e.target.value,
    });
  };

  const handleUpdateTodo = () => {
    dispatch({ type: UPDATE_TODO });
  };

  if (!selectedTodo) return null;

  return (
    <div className="todo-details-container">
      <div className="todo-details-header">
        <Select
          options={[
            { value: "complete", label: "Complete" },
            { value: "incomplete", label: "Incomplete" },
          ]}
          value={selectedTodo.completed ? "complete" : "incomplete"}
          onChange={handleUpdateActiveTodoStatus}
        />
        <CloseCircleOutlined
          style={{ color: "#858585", cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: RESET_ACTIVE_TODO });
          }}
        />
      </div>
      <h2 className="todo-details-title">{selectedTodo.title}</h2>
      <div className="todo-details-description">
        <textarea
          className="todo-details-description-textarea"
          value={selectedTodo.description}
          onChange={handleUpdateActiveTodoDescription}
        />
      </div>
      <Tags />
      <Assignee />
      <Button onClick={handleUpdateTodo} style={{ marginTop: 15 }}>
        Save
      </Button>
    </div>
  );
};

export default TodoDetails;
