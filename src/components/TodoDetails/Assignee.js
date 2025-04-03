import React from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_TODO_ASSIGNEE } from "../../store/actions";

const Assignee = () => {
  const dispatch = useDispatch();
  const activeTodo = useSelector((state) => state.todos.selectedTodo);
  const assignees = useSelector((state) => state.todos.assignees);

  const assigneeOptions = assignees.map((assignee) => ({
    label: assignee.name,
    value: assignee.id,
  }));

  const handleAssigneeChange = (value) => {
    dispatch({ type: SET_ACTIVE_TODO_ASSIGNEE, payload: value });
  };

  return (
    <div className="assignee-container" style={{ marginTop: 15 }}>
      <Select
        style={{ width: 150 }}
        options={assigneeOptions}
        value={activeTodo.assignee}
        onChange={handleAssigneeChange}
      />
    </div>
  );
};

export default Assignee;
