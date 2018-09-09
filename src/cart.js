import EventEmitter from './utils/EventEmitter'

class cart extends EventEmitter {
  constructor() {
    super();

    this.state = {
      items: [],
      total: 0
    };

  }

  getItems = () => {
    return this.state.items;
  }

  getTotal = () => {
    return this.state.total;
  }

  clearItems = () => {

    this.publish("updated cart",
      this.state.total = 0,
      this.state.items = []
    )
  }

  incrementItems = (id) => {
    this.publish("updated cart",
      this.state.items[id].count += 1,
      this.state.total += this.state.items[id].price
    )

  }

  decrementItems = (id) => {
    if (this.state.items[id].count === 1) {
      this.publish("updated cart",
        this.state.total -= this.state.items[id].price,
        delete this.state.items[id]
      )

    } else {
      this.publish("updated cart",
        this.state.items[id].count -= 1,
        this.state.total -= this.state.items[id].price
      )
    }
  }


  addItem = (id, title, price, img) => {

    this.publish("updated cart",
      this.state.items[id] = {
        count: 1,
        title: title,
        price: price,
        img: img
      },

      this.state.total += price

    )
  }



}
export default cart;

