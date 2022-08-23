import { cartReducer } from "./cart";

describe("test", () => {
  it("adding product to cart", () => {
    const initialState = {
      cart: [],
    };

    const action = {
      type: "ADD_TO_CART",
      payload: {
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
    };
    const state = cartReducer(initialState, action);

    expect(state).toEqual({
      cart: [
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
      ],
    });
  });

  it("increase product quantity in cart", () => {
    const initialState = {
      cart: [
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
          cartQuantity: 1,
        },
      ],
    };

    const action = {
      type: "INCREASE_QUANTITY",
      payload: 1,
    };

    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      cart: [
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
          cartQuantity: 2,
        },
      ],
    });
  });

  it("decrease product quantity in cart", () => {
    const initialState = {
      cart: [
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
          cartQuantity: 1,
        },
      ],
    };

    const action = {
      type: "DELETE_FROM_CART",
      payload: 1,
    };

    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      cart: [],
    });
  });
});
