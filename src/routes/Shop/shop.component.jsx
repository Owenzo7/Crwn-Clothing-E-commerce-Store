/* eslint-disable no-unused-vars */
import React from 'react'
import SHOP_DATA from '../../shopData.json'

function Shop() {
  return (
    <div>

    {SHOP_DATA.map(({id, name}) => (
        <div key={id}>
            <h1>{name}</h1>
        </div>
    ))}
    
    </div>
  )
}

export default Shop