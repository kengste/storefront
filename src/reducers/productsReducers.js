export function productsReducers(state = { products: [] }, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
    return { products: [...state.products] };
    case 'POST_PRODUCTS':
    return { products: [...state.products, ...action.payload] };
    case 'UPDATE_PRODUCT_COUNT':
    return { ...state, products: action.payload };
    default:
    return state;
  }
}
