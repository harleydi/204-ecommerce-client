import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const CartCard = ({ product, subTotal, setSubTotal }) => {
  const [quantity, setQuantity] = useState(1)
  

  const { setUserCart } = useOutletContext()

  const handleRemoveFromCart = () => {
    const products = JSON.parse(localStorage.getItem('cart'))
    const findItem = products.filter((item) => product._id !== item._id)
    // localStorage.removeItem('cart')
    // localStorage.setItem('cart', JSON.stringify(findItem))
    setUserCart(findItem)
    console.log(findItem)
  }

  const incrementQuantity = () => {
    setQuantity(quantity+1)
    setSubTotal(Math.round(subTotal + product.price))
  }

  const decrementQuantity = () => {
    setQuantity(quantity-1)
    setSubTotal(Math.abs(subTotal - product.price))
  }

  return (
    <>
      <div class="card rounded-xl">
        <h3 class="p-2 uppercase text-blue-600">{product.category}</h3>
        <img 
          src={product.image}
          class="h-56 w-full rounded-xl p-2"
        />
        <CardContent>
          <p class="font-light text-blue-600 tracking-wider text-xl">${product.price}</p>
        </CardContent>
        <CardActions class="flex justify-evenly">
            <div class="flex flex-row">
                <IconButton class="text-gray-500" onClick={incrementQuantity} >
                    <AddIcon />
                </IconButton>
                <p class="px-2 text-white">{quantity}</p>
                <IconButton class="text-gray-500" >
                    <RemoveIcon onClick={decrementQuantity} />
                </IconButton>
            </div>
          <IconButton class="text-gray-500" onClick={handleRemoveFromCart} >
            <RemoveShoppingCartIcon />
          </IconButton>
        </CardActions>
      </div>
    </>
  )
}

export default CartCard