import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import OrderCard from '../Components/OrderCard'
import './Profile.css'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Flare } from '@mui/icons-material'


const Profile = () => {
  const { userOrders, userInfo, orders, setUserOrders } = useOutletContext()

  const columns = [
    {id: 'id', name: 'Order'},
    {id: 'date', name: 'Date'},
    {id: 'total', name: 'Total'},
    {id: 'paymentstatus', name: 'Payment Status'},
    {id: 'orderStatus', name: 'Order Status'},
    {id: 'dock', name: 'Dock'}
  ]

  

//   useEffect(() => {
//     const getUserOrders = orders.filter((order) => order.orderOwner === userInfo._id)
//     setUserOrders(getUserOrders)
//   }, [])
  
  return (
    <div>
        <h1 style={{ color: 'white'}} class="font-bold uppercase">{userInfo.firstName}'s Orders</h1>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            {userOrders.length > 0 && userOrders.map((order) => <OrderCard key={order.id} order={order} />)}    
        </div>
    </div>
  )
}

export default Profile