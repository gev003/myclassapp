import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Hello from "./hello.js";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0,
      color: "lightgreen",
    };
    console.log("Timer Constructor Called");
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, currencyOptions);
  };

  add = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price,
    }));
  };

  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart];
      cart.splice(cart.length - 1, 1);
      return {
        cart,
        total:
          state.total - product.price > 0 ? state.total - product.price : 0,
      };
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items</div>
        <div>Total {this.getTotal()}</div>
        <Hello total={this.state.total} />
        <div>
          {products.map((product) => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>
                  {product.emoji}
                </span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
