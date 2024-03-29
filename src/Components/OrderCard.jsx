import { Avatar, Card, CardContent, CardHeader, TableCell, TableRow, Typography, colors } from '@mui/material'
import { grey } from '@mui/material/colors'
// import { hover } from '@testing-library/user-event'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import OrderTicket from './OrderTicket'



const OrderCard = ({ order }) => {
  const { userOrders } = useOutletContext()
  const orderItems = order.orderItems.map((item) => item.image)
  console.log(orderItems)
 
  const orderId = order._id
  const slicedId = orderId.split('').slice(orderId.length-4, order.length)
  console.log(slicedId)


  return (
    <div style={{ background: '#303134', height: '27rem', width: '25rem', margin: '1.5rem', color: 'white', borderRadius: '.5rem'}}>
        <div>
            <h2 class="font-bold text-blue-600">#{slicedId}</h2>
            <h6 class="text-green-600">{order.orderStatus}</h6>
        </div>
        <div style={{ overflow: 'scroll', height: '21rem'}}>
            {order.orderItems.map((product) => (
                <div style={{ margin: '1rem', height: '7rem', background: '#757575',display: 'flex', borderRadius: '.5rem'}}>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <img src={product.image} style={{ height: '100%', width: '5rem', position: 'sticky'}} />
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ fontSize: 'small', margin: '0', color: 'black' }}>{product.name}</h3>
                        <p style={{ fontStyle: 'italic', margin: 0, fontSize: '12px' }}>{product.category}</p>
                        <h5 style={{ color: colors.indigo['900'] }}>${product.price}</h5>
                    </div>
                </div>
            ))}
        </div>
        <h4 style={{ color: colors.blue['A700'] }}>${order.orderTotal}</h4>
    </div>
  )
}

export default OrderCard