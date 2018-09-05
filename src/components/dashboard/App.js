import React, { Component } from "react";
import "./App.css";
let file = require("../../data/products.json");
const db = JSON.stringify(file);
export const data = JSON.parse(db);
let cart = require("../cart/cart");

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartOpen: false,
      total: 0
    };
  }
  handleCartClick = e => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  handleClearClick = () => {
    cart.clearItems();
    this.setState({ total: cart.getTotal() });
  };
  handleAddClick = (e, id, item) => {
    if (cart.getItems()[id]) {
      cart.incrementItems(id);
    } else {
      cart.addItem(id, item.title, parseInt(item.price), item.image);
    }
    this.setState({ total: cart.getTotal() });
  };
  handleIncrementClick = index => {
    cart.incrementItems(index);
    this.setState({ total: cart.getTotal() });
  };

  handleDecrementClick = index => {
    cart.decrementItems(index);
    this.setState({ total: cart.getTotal() });
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

    let cartMenu = cart.getItems().map((item, index) => {
      return (
        <li key={index}>
          <div
            className="cartProductImg"
            style={{ backgroundImage: `url(${item.img})` }}
          />
          <div>
            <p>{item.title}</p>
            <p style={{ fontWeight: "bold" }}>{item.price} EGP</p>
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
            <h3>ITEMS</h3>
            <button className="clearButton" onClick={this.handleClearClick}>
              CLEAR
            </button>
          </header>
          <ul>{cartMenu}</ul>
          <button className="PayButton">Pay {this.state.total} EGP</button>
        </div>
        <div>{products}</div>
      </div>
    );
  }
}

export default App;
