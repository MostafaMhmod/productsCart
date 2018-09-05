let state = {
  items: [],
  total: 0
};

export function getItems() {
  return state.items;
}

export function getTotal() {
  return state.total;
}
export function clearItems() {
  state.total = 0;
  state.items = [];
}
export function addItem(id, title, price, img) {
  state.items[id] = {
    count: 1,
    title: title,
    price: price,
    img: img
  };

  state.total += price;
}

function removeItem(id) {
  state.total -= state.items[id].price
  delete state.items[id];
}

export function incrementItems(id) {
  state.items[id].count += 1;
  state.total += state.items[id].price;
}

export function decrementItems(id) {
  if (state.items[id].count === 1) {
    removeItem(id);
  } else {
    state.items[id].count -= 1;
    state.total -= state.items[id].price;
  }
}
