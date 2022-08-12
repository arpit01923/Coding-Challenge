import { useProduct } from "../../context/product";
import "./sidebar.css";

const colours = ["Red", "Blue", "Green"];
const genders = ["Men", "Women"];
const prices = ["0-250", "251-450", "450-500"];
const types = ["Polo", "Hoodie", "Basic"];
export const Sidebar = () => {
  const { productDispatch } = useProduct();

  const changeHandler = (category, data) => {
    productDispatch({ type: category, payload: data });
  };

  return (
    <section className="sidebar">
      <h3>Colour</h3>
      <ul className="list">
        {colours.map((colour, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => changeHandler("COLOR", colour)}
            />
            <label>{colour}</label>
          </li>
        ))}
      </ul>
      <h3>Gender</h3>
      <ul className="list">
        {genders.map((gender, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => changeHandler("GENDER", gender)}
            />
            <label>{gender}</label>
          </li>
        ))}
      </ul>
      <h3>Price</h3>
      <ul className="list">
        {prices.map((price, index) => (
          <li key={index}>
            <input
              type="radio"
              name="price"
              onChange={() => changeHandler("PRICE", price)}
            />
            <label>{price}</label>
          </li>
        ))}
      </ul>
      <h3>Type</h3>
      <ul className="list">
        {types.map((type, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => changeHandler("TYPE", type)}
            />
            <label>{type}</label>
          </li>
        ))}
      </ul>
    </section>
  );
};
