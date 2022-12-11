export const state = {
  cart: {},
  total: parseInt(localStorage.getItem('total')) || 0,
};

export const action = {
  setCartTotal: (dispatch, value) => dispatch({ type: 'CART_TOTAL', value }),
  addCart: (dispatch, value) => dispatch({ type: 'CART_ADD', value }),
};
