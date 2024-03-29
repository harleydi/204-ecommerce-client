import React, { useState } from 'react'
import { getOneProduct, getProducts } from '../Api/fakerData'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import InfoIcon  from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { green, grey, indigo } from '@mui/material/colors';


const ProductCard = ({ product }) => {
  const { handleAddToCart, setProduct } = useOutletContext()

  const navigate = useNavigate()
  

  

  const handleViewProduct = () => {
    setProduct(product)
    navigate('/product-page')
  }

  
  return (
    <div class="card rounded-3xl px-2 flex flex-col pt-2">
        <p class="uppercase font-bold text-gray-400">{product.category}</p> 
        <img class="w-full h-60 my-4 rounded-lg" src={product.image}/>
        <h2>{product.title}</h2>
        <h3 class="font-normal text-blue-600 text-lg tracking-wider">${product.price}</h3>
        <div class="flex justify-evenly">
          <button onClick={handleViewProduct}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" class="text-gray-400 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </button>
          <button onClick={() => handleAddToCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" class="text-gray-400 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default ProductCard


