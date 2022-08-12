import { useCart } from "../../context/cart";
import "./cart.css";

export const Cart = () => {
  const { totalPrice, cartState, cartDispatch } = useCart();

  const increaseQuantity = (productId) => {
    cartDispatch({ type: "INCREASE_QUANTITY", payload: productId });
  };

  const deleteItem = (productId) => {
    cartDispatch({ type: "DELETE_FROM_CART", payload: productId });
  };

  return (
    <>
      <h1 className="cart-header">Shopping Cart</h1>
      {cartState.cart.map((product) => (
        <section className="horizontal-card" key={product.id}>
          <img src={product.imageURL} alt="image" className="image" />
          <div className="text">
            <p className="name">{product.name}</p>
            <p className="price">Rs {product.price}</p>
          </div>
          <div className="quantity">
            <p>{product.cartQuantity}</p>
            <button
              className="button"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
          <button className="button" onClick={() => deleteItem(product.id)}>
            Delete
          </button>
        </section>
      ))}
      <h1>Total amount: {totalPrice}</h1>
    </>
  );
};
