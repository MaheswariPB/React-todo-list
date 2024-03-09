const Todoreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo, index) =>
        index === action.payload.index
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    default:
      return state;
  }
};

export default Todoreducer;
