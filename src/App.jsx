import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { getUserToken, removeUserToken } from './Auth/AuthLocalStorage';
import { validateUser, getOrders } from './Api/api';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';

function App() {
  // let storedUserCart = JSON.parse(localStorage.getItem('cart'))
  const [userToken, setUserToken] = useState(null)
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const [borders, setBorders] = useState([])
  const [userOrders, setUserOrders] = useState([])
  const [userCart, setUserCart] = useState([])
  const [product, setProduct] = useState('')
  
  

  useEffect(() => {
    const token = getUserToken()
    setUserToken(token)
  }, [shouldRefresh])

  useEffect(() => {
    const verifyUser = async () => {
      if (userToken) {
        const verifyResult = await validateUser(userToken)
        if (verifyResult.success) {
          console.log(verifyResult)
          const orders = await getOrders()
          setBorders(orders)
          setUser(verifyResult.data.email)
          setUserInfo(verifyResult.data)
          setIsVerified(true)
        } else {
          setShouldRefresh(true)
          const resultLogout = await removeUserToken()
          if (resultLogout) {
            setIsVerified(false)
            setUser(null)
            setShouldRefresh(false)
          }
        }
      }
    }
    verifyUser()
  }, [userToken])

  useEffect(() => {
    const getUserOrders = async () => {
      
      const userOrders = borders.filter((order) => order.orderOwner === userInfo._id)
      setUserOrders(userOrders)
      console.log(borders)
      console.log(userOrders)
    }
    getUserOrders()
    // const getUserOrders = orders.filter((order) => order.orderOwner === userInfo._id)
  }, [userInfo])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(userCart))
  }, [userCart])

  // console.log(currentUser(user))

  const handleAddToCart = (product) => {
    setUserCart([...userCart, product])
    // localStorage.setItem('cart', JSON.stringify(userCart))
  }

  // console.log(userInfo)

  return (
    <div className="App">
      <Navbar 
        isVerified={isVerified} 
        user={user} 
        setShouldRefresh={setShouldRefresh}
        setIsVerified={setIsVerified}
        setUser={setUser}
        userCart={userCart}
      />
      <Outlet context={{ 
          isVerified, 
          setIsVerified,
          setShouldRefresh, 
          handleAddToCart, 
          product, 
          setProduct, 
          userCart, 
          setUserInfo, 
          setUserCart, 
          userInfo,
          userOrders,
          setUserOrders,
          shouldRefresh
      }} />
    </div>
  );
}

export default App;
