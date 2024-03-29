import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button } from '@mui/material'


const PriceBox = ({ userCart, subTotal }) => {
  



  const navigate = useNavigate()

  

  const handleCheckout = () => {
    navigate('/home/checkout')
  }
  

  return (
    <div style={{ border: '2px solid black', marginBottom: '2rem', padding: '2rem', color: 'white'}}>
        <h1>Your Total is: <span class="text-green-500">${subTotal}</span></h1>
        <h6>You have <span class="text-blue-600">{userCart.length}</span> items in this cart</h6>
        <button class="btn" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  )
}

export default PriceBox