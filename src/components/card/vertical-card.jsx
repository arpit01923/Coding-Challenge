import "./vertical-card.css";
import { useCart } from "../../context";

export const VerticalCard = ({ filteredData }) => {
  const { cartState, cartDispatch } = useCart();

  const addCartHandler = (productId) => {
    const isAlreadyPresent = cartState.cart.find(
      (product) => product.id === productId
    );
    if (isAlreadyPresent === undefined) {
      const product = filteredData.find((product) => product.id === productId);
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { ...product, cartQuantity: 1 },
      });
    } else {
      alert("Product is already present");
    }
  };

  return (
    <>
      {filteredData.map((product) => (
        <section className="vertical-card" key={product.id}>
          <h3 className="name">{product.name}</h3>
          <img src={product.imageURL} alt="product-img" className="image" />
          <div className="text">
            <p className="price">Rs {product.price}</p>
            <button
              className="button"
              onClick={() => addCartHandler(product.id)}
            >
              Add to cart
            </button>
          </div>
        </section>
      ))}
    </>
  );
};
