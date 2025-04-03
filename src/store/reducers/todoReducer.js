import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  UPDATE_ACTIVE_TODO_STATUS,
  SET_ACTIVE_TODO,
  RESET_ACTIVE_TODO,
  UPDATE_ACTIVE_TODO_DESCRIPTION,
  ADD_TAG,
  DELETE_TAG,
  SET_ACTIVE_TODO_ASSIGNEE,
  UPDATE_TODO,
} from "../actions";
const initialState = {
  todos: [
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      description: "Setup development environment",
      tags: ["development", "environment"],
      assignee: null,
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      description: "Develop website and add content",
      tags: ["development", "content"],
      assignee: null,
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      description: "Deploy to live server",
      tags: ["deployment", "server"],
      assignee: null,
      completed: false,
    },
  ],
  selectedTodo: null,
  assignees: [
    {
      id: uuidv4(),
      name: "Simon Gomes",
      email: "simon.gomes@example.com",
    },
    {
      id: uuidv4(),
      name: "Jane Baroi",
      email: "jane.baroi@example.com",
    },
    {
      id: uuidv4(),
      name: "Smith Jonson",
      email: "smith.jonson@example.com",
    },
    {
      id: uuidv4(),
      name: "Robert Smith",
      email: "robert.smith@example.com",
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case SET_ACTIVE_TODO: {
      return {
        ...state,
        selectedTodo: state.todos.find((todo) => todo.id === action.payload),
      };
    }
    case RESET_ACTIVE_TODO: {
      return {
        ...state,
        selectedTodo: null,
      };
    }
    case UPDATE_ACTIVE_TODO_STATUS: {
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          completed: !state.selectedTodo.completed,
        },
      };
    }
    case UPDATE_ACTIVE_TODO_DESCRIPTION: {
      return {
        ...state,
        selectedTodo: { ...state.selectedTodo, description: action.payload },
      };
    }
    case ADD_TAG: {
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          tags: [...state.selectedTodo.tags, action.payload],
        },
      };
    }
    case DELETE_TAG: {
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          tags: state.selectedTodo.tags.filter((tag) => tag !== action.payload),
        },
      };
    }
    case SET_ACTIVE_TODO_ASSIGNEE: {
      return {
        ...state,
        selectedTodo: { ...state.selectedTodo, assignee: action.payload },
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === state.selectedTodo.id) {
            return {
              ...todo,
              title: state.selectedTodo.title,
              description: state.selectedTodo.description,
              tags: state.selectedTodo.tags,
              assignee: state.selectedTodo.assignee,
              completed: state.selectedTodo.completed,
            };
          }
          return todo;
        }),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
