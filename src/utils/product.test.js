import { getColours, getGender, getPrice, getSearch, getType } from "./product";

const product = [
  {
    id: 1,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Black Polo",
    type: "Polo",
    price: 250,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 3,
  },
  {
    id: 2,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Blue Polo",
    type: "Polo",
    price: 350,
    currency: "INR",
    color: "Blue",
    gender: "Women",
    quantity: 3,
  },
];
const initialState = {
  colours: ["Blue"],
  genders: ["Women"],
  prices: "300-400",
  types: ["Polo"],
  search: "Blue",
};

describe("test", () => {
  it("get colors", () => {
    const data = getColours(initialState, product);
    expect(data).toEqual([
      {
        id: 2,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3,
      },
    ]);
  });

  it("get gender", () => {
    const data = getGender(initialState, product);
    expect(data).toEqual([
      {
        id: 2,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3,
      },
    ]);
  });

  it("get type", () => {
    const data = getType(initialState, product);
    expect(data).toEqual([
      {
        id: 1,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Black Polo",
        type: "Polo",
        price: 250,
        currency: "INR",
        color: "Black",
        gender: "Men",
        quantity: 3,
      },
      {
        id: 2,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3,
      },
    ]);
  });

  it("get price", () => {
    const data = getPrice(initialState, product);
    expect(data).toEqual([
      {
        id: 2,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3,
      },
    ]);
  });

  it("get search", () => {
    const data = getSearch(initialState, product);
    expect(data).toEqual([
      {
        id: 2,
        imageURL:
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3,
      },
    ]);
  });
});
