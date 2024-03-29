import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { createOrder } from '../Api/api'

const Checkout = () => {
  const [orderTotal, setOrderTotal] = useState('')
  const [orderItems, setOrderItems] = useState([])
  

  const { userCart, userInfo, setUserCart } = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    const getTotal = userCart.reduce((acc, curr) => {
      curr = curr.price
      return acc + curr
    }, 0)
    setOrderTotal(getTotal)
    setOrderItems(userCart)
    
  }, [userCart])

  const handleSubmitOrder = async (e) => {
    e.preventDefault()
    const data = {
        orderOwner: userInfo._id,
        orderTotal: orderTotal,
        orderItems: orderItems
    }
    const order = createOrder(data)
    setUserCart([])
    navigate('/')
  }

  


  return (
    <div>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmitOrder}>
            <button>Place your order</button>
        </form>
    </div>
  )
}

export default Checkout