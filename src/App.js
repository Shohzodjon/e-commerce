import { Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header/Header";
import Pages from "./pages/Pages";
import Data from "./flashDeals/Data";
import { useState } from "react";
import Cart from "./common/cart/Cart";

function App() {
  const { productItems } = Data;
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
          element={<Pages productItems={productItems} addToCart={addToCart} />}
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
    </div>
  );
}

export default App;
