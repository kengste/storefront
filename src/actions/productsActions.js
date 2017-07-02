'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

export function getProducts(product) {
  return {
    type: 'GET_PRODUCTS',
    payload: product
  };
}

export function postProducts(product) {
  return {
    type: 'POST_PRODUCTS',
    payload: product
  };
}

export function updateCount(description, unit, cart) {
  const currentBookToUpdate = cart;
  const indexToUpdate = currentBookToUpdate.findIndex(
    (book) => {
      return book.description === description;
    }
  );
  const newCount = [parseInt(currentBookToUpdate[indexToUpdate].quantity, 10), parseInt(unit, 10)]
                    .reduce((c, d) => { return c + d; }, 0);
  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: newCount
  };
  const cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)];

  return {
    type: 'UPDATE_PRODUCT_COUNT',
    payload: cartUpdate
  };
}
