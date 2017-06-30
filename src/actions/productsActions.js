export function postProducts(product) {
  return {
    type: 'POST_PRODUCT',
    payload: product
  };
}
