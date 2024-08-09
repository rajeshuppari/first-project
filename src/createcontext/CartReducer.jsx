const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((p) => {
        return p.id !== action.id;
      });
    default:
      return state;
  }
};

export default CartReducer;
