import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'

const Cart = () => {
   const cart = useContext(CartContext)
   const total = cart.items.reduce((a, b) => a + b.pirce, 0)
   return (
      <div className='text-center border-2 w-48 ml-auto mr-auto m-4 p-4 rounded-xl bg-gray-100'>
         <h1>Cart</h1>
         {cart && 
         cart.items.map(item => (
         <li>{item.name} - ${item.price}</li>
         ))}
         <h5>Total Bill: ${total}</h5>
      </div>
   )
}

export default Cart