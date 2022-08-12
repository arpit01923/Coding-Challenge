import { useState } from "react";
import { Sidebar, VerticalCard } from "../../components";
import { useProduct } from "../../context/product";
import "./product.css";

export const Product = () => {
  const [search, setSearch] = useState("");
  const { filteredData, productDispatch } = useProduct();

  const changeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    productDispatch({ type: "SEARCH", payload: value });
  };

  return (
    <>
      <div className="header">
        <input
          type="text"
          placeholder="Search for products..."
          className="searchbar"
          value={search}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <section className="container">
        <Sidebar />
        <main className="product-container">
          <VerticalCard
            filteredData={filteredData}
            productDispatch={productDispatch}
          />
        </main>
      </section>
    </>
  );
};
