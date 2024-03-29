import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import { getOrders } from '../Api/api'

const PrivateRoute = () => {
  const [orders, setOrders] = useState([])
  
  const { isVerified, userCart, setUserCart, userInfo, userOrders, setUserOrders } = useOutletContext()
  
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login')
  }

  // useEffect(() => {
  //   const getAllOrders = async () => {
  //     const orders = await getOrders()
  //     setOrders(orders.data)
  //     return orders.data
  //   }
  //   getAllOrders()
  // }, [])

  return (
    <div>
        {/* <h1>Private Route</h1> */}
        {!isVerified && 
          <div>
            <h1>Please login to continue</h1>
            <button onClick={handleNavigateToLogin}>Login</button>
          </div>
        }
        {isVerified && <Outlet context={{ userCart, userInfo, userOrders, setUserCart, setUserOrders, orders }} />}
    </div>
  )
}

export default PrivateRoute