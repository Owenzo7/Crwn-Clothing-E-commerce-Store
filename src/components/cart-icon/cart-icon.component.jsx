/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { ShoppingIcon, ItemCount, CartIconContainer } from "./cart-icon.styles";

import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
