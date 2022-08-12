import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../context";

export const Navbar = () => {
  const { cartState } = useCart();

  return (
    <nav className="navbar">
      <h2 className="logo">TeeRex Store</h2>
      <div className="menubar">
        <Link to="/">
          <p className="prod">Products</p>
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart-icon" />
          <span className="quant">{cartState.cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};
