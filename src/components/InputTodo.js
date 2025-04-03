import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/actions";

const InputTodo = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};
export default InputTodo;
