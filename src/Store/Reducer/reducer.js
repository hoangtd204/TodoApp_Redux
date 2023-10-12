import { v4 as uuidv4 } from "uuid";

//start Todo list
const stateRedux = [
  { id: uuidv4(), task: " Tăng Đức Hoàng" },
  { id: uuidv4(), task: " Tăng Đức Bảo" },
];

// reducer
const rootReducer = (state = stateRedux, action) => {
  switch (action.type) {
    case "SetData":
      return [...state, action.payload];
    case "DeleteData":
      const isdeleteState = state.filter((todo) => todo.id !== action.payload);
      return isdeleteState;
    case "UpdateData":
      return state.map((update) =>
        update.id === action.id ? { ...update, task: action.payload } : update
      );

    default:
      return state;
  }
};

export default rootReducer;
