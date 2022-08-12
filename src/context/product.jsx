import axios from "axios";
import { useReducer } from "react";
import { useState, useEffect, useContext, createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const checkCategory = (data, payload) => {
    if (!data.includes(payload)) {
      const newState = [...data, payload];
      return newState;
    } else {
      const newState = data.filter((color) => color !== payload);
      return newState;
    }
  };

  const productReducer = (productState, productAction) => {
    switch (productAction.type) {
      case "COLOR":
        return {
          ...productState,
          colours: checkCategory(productState.colours, productAction.payload),
        };
      case "GENDER":
        return {
          ...productState,
          genders: checkCategory(productState.genders, productAction.payload),
        };
      case "PRICE":
        return {
          ...productState,
          prices: productAction.payload,
        };
      case "TYPE":
        return {
          ...productState,
          types: checkCategory(productState.types, productAction.payload),
        };
      case "SEARCH":
        return {
          ...productState,
          search: productAction.payload,
        };
    }
  };
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

  const getColours = (state, products) => {
    if (state.colours.length === 0) {
      return products;
    }
    return products.filter((product) =>
      state.colours.find((color) => color === product.color)
    );
  };

  const getGender = (state, products) => {
    if (state.genders.length === 0) {
      return products;
    }
    return products.filter((product) =>
      state.genders.find((gender) => gender === product.gender)
    );
  };

  const getType = (state, products) => {
    if (state.types.length === 0) {
      return products;
    }
    return products.filter((product) =>
      state.types.find((type) => type === product.type)
    );
  };

  const getPrice = (state, products) => {
    const price = state.prices;
    if (price === "") {
      return products;
    } else {
      const splitPrice = price.split("-");
      const lowerLimit = splitPrice[0];
      const upperLimit = splitPrice[1];
      const newProducts = products.filter(
        (product) => product.price >= lowerLimit && product.price <= upperLimit
      );
      return newProducts;
    }
  };

  const getSearch = (state, products) => {
    const newProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(state.search.toLowerCase()) ||
        product.color.toLowerCase().includes(state.search.toLowerCase()) ||
        product.type.toLowerCase().includes(state.search.toLowerCase())
    );
    return newProducts;
  };

  const filteredData = ((productState, [...products]) => {
    const coloursProduct = getColours(productState, products);
    const genderProduct = getGender(productState, coloursProduct);
    const typeProduct = getType(productState, genderProduct);
    const priceProduct = getPrice(productState, typeProduct);
    const searchProduct = getSearch(productState, priceProduct);
    return searchProduct;
  })(productState, products);

  return (
    <ProductContext.Provider value={{ filteredData, setProducts, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
