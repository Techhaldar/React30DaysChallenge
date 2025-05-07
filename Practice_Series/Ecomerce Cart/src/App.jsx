import './App.css'
import { createContext } from 'react'
import Item from './component/Item'
import Cart from './component/Cart'

export const CartContext = createContext()
function App() {
  return (
    <>
      
      <CartContext.Provider>
        <Item name="Laptop" price="$1000" />
        <Item name="Mobile" price="$500"/>
        <Item name="MacBook" price="$2999"/>
        <Cart />
      </CartContext.Provider>
      
    </>
  )
}

export default App
