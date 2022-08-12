import { useReducer } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
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
    }
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const totalPrice = cartState.cart?.reduce(
    (acc, curr) => (acc += curr.price * curr.cartQuantity),
    0
  );

  return (
    <CartContext.Provider value={{ totalPrice, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
