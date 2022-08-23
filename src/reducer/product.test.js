import { productReducer } from "./product";

const initialValue = {
  colours: [],
  genders: [],
  prices: "",
  types: [],
  search: "",
};
describe("test", () => {
  it("to get particular color products", () => {
    const action = {
      type: "COLOR",
      payload: "Blue",
    };

    const state = productReducer(initialValue, action);
    expect(state).toEqual({
      colours: ["Blue"],
      genders: [],
      prices: "",
      types: [],
      search: "",
    });
  });

  it("to get particular gender products", () => {
    const action = {
      type: "GENDER",
      payload: "Women",
    };

    const state = productReducer(initialValue, action);
    expect(state).toEqual({
      colours: [],
      genders: ["Women"],
      prices: "",
      types: [],
      search: "",
    });
  });

  it("to get particular type products", () => {
    const action = {
      type: "TYPE",
      payload: "Polo",
    };

    const state = productReducer(initialValue, action);
    expect(state).toEqual({
      colours: [],
      genders: [],
      prices: "",
      types: ["Polo"],
      search: "",
    });
  });

  it("to get particular price products", () => {
    const action = {
      type: "PRICE",
      payload: "0-250",
    };

    const state = productReducer(initialValue, action);
    expect(state).toEqual({
      colours: [],
      genders: [],
      prices: "0-250",
      types: [],
      search: "",
    });
  });

  it("to get particular search products", () => {
    const action = {
      type: "SEARCH",
      payload: "black",
    };

    const state = productReducer(initialValue, action);
    expect(state).toEqual({
      colours: [],
      genders: [],
      prices: "",
      types: [],
      search: "black",
    });
  });
});
