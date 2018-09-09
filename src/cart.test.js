import cart from './cart'
let Cart = new cart();

it('subscribes to the modifying of the cart event', () => {
  Cart.subscribe("updated cart", () => {
  })
})

it("Adds to the cart list", () => {
  console.log("Adding new item to the cart");
  Cart.addItem(
    1,
    "test",
    parseInt("544"),
    "http://lorempixel.com/640/480/fashion"
  );
});

it("increment the item count", () => {
  console.log("incrementing the item count");
  Cart.incrementItems(1);
});


it("decrement the item count", () => {
  console.log("decrementing the item count");
  Cart.decrementItems(1);
});


it("clear the items from the state of the cart", () => {
  console.log("clearing the items from the cart");
  Cart.clearItems();
})

it("retrive the state of the cart", () => {
  Cart.getItems();
});

it("retrive the total of the payments of the cart", () => {
  Cart.getTotal();
});

