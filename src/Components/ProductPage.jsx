import React from 'react'
import { useOutletContext } from 'react-router-dom'
import InfoIcon  from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Flare } from '@mui/icons-material';

const ProductPage = () => {
  const { product, handleAddToCart } = useOutletContext()

  return (
    <div>
        <div class="card">
            <img src={product.image} class="w-20" />
            <p>${product.price}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductPage