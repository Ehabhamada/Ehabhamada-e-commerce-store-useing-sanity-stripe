import React from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'


function NaveBar() {
  const {showCart,setShowCart,totalQuantities} = useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
      <Link href="/">Next js Store App </Link>
      </p>

      <button className='cart-icon' type='button' onClick={()=>{
        setShowCart(true)
      }}>
        <AiOutlineShoppingCart/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default NaveBar