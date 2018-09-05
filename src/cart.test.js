let cart = require("./components/cart/cart");

it("Adds to the cart list", () => {
  cart.addItem(
    1,
    "test",
    parseInt("544"),
    "http://lorempixel.com/640/480/fashion"
  );
});

it("increment the item count", () => {
    cart.incrementItems(1);
  });


  it("decrement the item count", () => {
    cart.decrementItems(1);
  });

  
  it("clear the items from the state of the cart", () => {
    cart.clearItems();
  })
  it("retrive the state of the cart", () => {
    cart.getItems();
  });

it("retrive the total of the payments of the cart", () => {
  cart.getTotal();
});

