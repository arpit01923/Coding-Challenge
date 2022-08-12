import axios from "axios";
import { useReducer } from "react";
import { useState, useEffect, useContext, createContext } from "react";
import { productReducer } from "../reducer";
import { getColours, getGender, getPrice, getSearch, getType } from "../utils";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [productState, productDispatch] = useReducer(productReducer, {
    colours: [],
    genders: [],
    prices: "",
    types: [],
    search: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const products = response.data;
        setProducts([...products]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const filteredData = ((productState, [...products]) => {
    const coloursProduct = getColours(productState, products);
    const genderProduct = getGender(productState, coloursProduct);
    const typeProduct = getType(productState, genderProduct);
    const priceProduct = getPrice(productState, typeProduct);
    const searchProduct = getSearch(productState, priceProduct);
    return searchProduct;
  })(productState, products);

  return (
    <ProductContext.Provider
      value={{ filteredData, setProducts, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
