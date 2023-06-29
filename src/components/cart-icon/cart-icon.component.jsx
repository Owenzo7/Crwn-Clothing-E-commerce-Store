/* eslint-disable no-unused-vars */
import React from 'react'
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {
  return (
    <div className="cart-icon-container">
        <ShoppingIcon className='shopping-icon' />
        <span className='icon-count'>0</span>
    </div>
  )
}

export default CartIcon