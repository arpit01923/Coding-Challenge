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

export { productReducer };
