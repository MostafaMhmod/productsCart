import React, { Component } from "react";
import "./App.css";
import cart from '../../cart'
let file = require("../../data/products.json");
const db = JSON.stringify(file);
export const data = JSON.parse(db);
let Cart = new cart();

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartOpen: false,
      total: 0
    };
  }


  componentDidMount() {
    Cart.subscribe("updated cart", ()=> {
      this.setState({ total: Cart.getTotal()})
    })
  }
  
  handleCartClick = e => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  handleClearClick = () => {
    Cart.clearItems();
  };
  handleAddClick = (e, id, item) => {
    
    if (Cart.getItems()[id]) {
      Cart.incrementItems(id);
    } else {
      Cart.addItem(id, item.title, parseInt(item.price), item.image);
    }
  };
  handleIncrementClick = index => {
    Cart.incrementItems(index);
  };

  handleDecrementClick = index => {
    Cart.decrementItems(index);
  };
  render() {
    let products = data.data.map((item, index) => {
      return (
        <div key={index} className="wrapper col-3">
          <div className="container">
            <div
              className="productImage"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="priceLabel">{item.price + "EGP"}</div>
            </div>
            <div className="infoCard">
              <h4>{item.title}</h4>
              <button
                onClick={e => {
                  this.handleAddClick(e, index, item);
                }}
              >
                ADD+
              </button>
            </div>
          </div>
        </div>
      );
    });
    let cartMenu = Cart.getItems().map((item, index) => {
      return (
        <li key={index}>
          <div
            className="cartProductImg"
            style={{ backgroundImage: `url(${item.img})` }}
          />
          <div>
            <p>{item.title}</p>
            <p style={{ fontWeight: "bold" }}>{item.price + "EGP"}</p>
          </div>
          <div className="amountContainer">
            <button onClick={() => this.handleDecrementClick(index)}>-</button>{" "}
            {item.count}{" "}
            <button onClick={() => this.handleIncrementClick(index)}>+</button>
          </div>
        </li>
      );
    });

    return (
      <div>
        <header>
          <nav className="navBar">
            <h4>SHOP</h4>
            <div
              style={{ cursor: "pointer" }}
              onClick={e => this.handleCartClick(e)}
            />
          </nav>
        </header>
        <div
          className="cartMenu"
          style={{ display: this.state.cartOpen ? "block" : "none" }}
        >
          <header>
            <h3 style={{ fontSize: "40px" }}>ITEMS</h3>
            <button className="clearButton" onClick={this.handleClearClick}>
              CLEAR
            </button>
          </header>
          <ul>{cartMenu}</ul>
          <button className="PayButton">Pay {this.state.total} EGP</button>
        </div>
        <div className="productsContainer">{products}</div>
      </div>
    );
  }
}

export default App;
