import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'
const Item = (props) => {
   const cart = useContext(CartContext)
   console.log("Cart", cart);

   return (
      <div className='item-card text-center border-2 w-48 ml-auto mr-auto m-4 p-4 rounded-xl bg-gray-100' >
         <h4 className='font-bold p-1' >{props.name}</h4>
         <p className='p-2'>Price: {props.price}</p>
         <button className='border-2 p-2 rounded-lg bg-green-500 text-white' onClick={() => cart.setItems([...cart.items], { name: props.name, price: props.price })}>Add To Card</button>
      </div>
   )
}

export default Item