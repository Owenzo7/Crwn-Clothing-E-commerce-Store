import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart  } = useContext(CartContext);
  return (
    <div>
      <h1>I am the Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <br />
              <span onClick={() =>addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
