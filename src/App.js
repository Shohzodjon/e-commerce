import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Pages from "./pages/Pages";
import Data from "./flashDeals/Data";
import Sdata from "./shop/Sdata";
import { useState } from "react";
import Cart from "./common/cart/Cart";
import Footer from "./footer/Footer";
import "./App.css";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          path="/"
          element={
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
