import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../actions";
const initialState = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Setup development environment",
    completed: true,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    }
    case CHANGE_STATUS: {
      const newState = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newState;
    }
    case DELETE_TODO: {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    }
    default:
      return state;
  }
};

export default todoReducer;
