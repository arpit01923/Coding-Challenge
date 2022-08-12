import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">TeeRex Store</h2>
      <div className="menubar">
        <Link to="/">
          <p className="prod">Products</p>
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart-icon" />
          <span className="quant">1</span>
        </Link>
      </div>
    </nav>
  );
};
