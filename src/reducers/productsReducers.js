export function productsReducers(state = { products: [] }, action) {
  switch (action.type) {
    case 'POST_PRODUCT':
    return { ...state, products: [...action.payload] };
    default:
    return state;
  }
}
