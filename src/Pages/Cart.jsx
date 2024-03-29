import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CartCard from '../Components/CartCard'
import PriceBox from '../Components/PriceBox'

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0)
  

  const { userCart } = useOutletContext()

  useEffect(() => {
    const getTotal = userCart.reduce((acc, curr) => {
      curr = curr.price
      return acc + curr
    }, 0)
    setSubTotal(getTotal)

}, [userCart])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PriceBox userCart={userCart} subTotal={subTotal} />
      {userCart.length > 0 && userCart.map((product) => <CartCard key={product.id} product={product} subTotal={subTotal} setSubTotal={setSubTotal} />)} 
    </div>
  )
}

export default Cart