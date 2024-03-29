import React from 'react'

const OrderTicket = ({ order }) => {
  return (
    <div>
        <img src={order.image} />
        <p>{order.orderName}</p>
        <p>{order.category}</p>
        <p>{order.price}</p>
    </div>
  )
}

export default OrderTicket