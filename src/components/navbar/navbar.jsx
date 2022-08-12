import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">TeeRex Store</h2>
      <div className="menubar">
        <p>Products</p>
        <AiOutlineShoppingCart className="cart-icon" />
        <span>1</span>
      </div>
    </nav>
  );
};
