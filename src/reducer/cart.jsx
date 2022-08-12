const getIncreasingQuantity = (cart, payload) => {
  const getMaxQuantity = cart.find((product) => product.id === payload);
  if (getMaxQuantity.quantity >= getMaxQuantity.cartQuantity) {
    return cart?.map((product) =>
      product.id === payload
        ? { ...product, cartQuantity: product.cartQuantity + 1 }
        : product
    );
  } else {
    alert("Got max quantity of the item");
    return cart;
  }
};

const getProductsAfterDeletion = (cart, payload) => {
  return cart.filter((product) => product.id !== payload);
};

const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return { ...cartState, cart: [...cartState.cart, cartAction.payload] };
    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        cart: getIncreasingQuantity(cartState.cart, cartAction.payload),
      };
    case "DELETE_FROM_CART":
      return {
        ...cartState,
        cart: getProductsAfterDeletion(cartState.cart, cartAction.payload),
      };
    default:
      return cartState;
  }
};

export { cartReducer };
