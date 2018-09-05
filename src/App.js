import React, { Component } from 'react';
import './App.css';
let file = require("./data/products.json")
const db = JSON.stringify(file)
export const data = JSON.parse(db);

class App extends Component {

  componentDidMount() {
    // console.log(data);
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navBar">
            <h4>SHOP</h4>
            <div></div>
          </nav>
        </header>

        <div className="wrapper">
        <div className="">
        <div className="productImage" style={{backgroundImage:`url(${data.data[0].image})`}}>

          <div>
            {data.data[0].price}
          </div>
        </div>
        </div>

        </div>

        <div className="wrapper">
          <div className="c">1</div>
          <div className="c">2</div>
          <div className="c">3</div>
          <div className="c">4</div>
          <div className="c">5</div>
          <div className="c">6</div>
        </div>


      </div>
    );
  }
}

export default App;
