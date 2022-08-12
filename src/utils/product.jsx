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

export { getColours, getGender, getPrice, getSearch, getType };
