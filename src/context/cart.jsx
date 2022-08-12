import { useReducer } from "react";
import { createContext, useContext } from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
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
