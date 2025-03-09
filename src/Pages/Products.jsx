import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { getLimitedProducts, getProducts } from '../Api/api'
import ProductData from '../Api/data.json'
import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import { deepOrange, indigo } from '@mui/material/colors'
import { BorderColor } from '@mui/icons-material'
import { useOutletContext } from 'react-router-dom'



console.log(ProductData)

const Products = () => {
  const [allProducts, setAllProductsData] = useState([])
  const [limitedProducts, setLimitedProducts] = useState([])
  const [sortOption, setSortOption] = useState('Recommended')
  const [sortedProducts, setSortedProduts] = useState()
  const [categoryOption, setCategoryOption] = useState('')
  const [page, setPage] = useState(0)

  const { setShouldRefresh, shouldRefresh } = useOutletContext()


  useEffect(() => {
    const getAll = async () => {
      const data = await getProducts()
      setProductData(data.data)
      console.log(data)
    }
    getAll()
  }, [])

 

  useEffect(() => {
    const handleCategoryAndSort = async () => {
      let filteredProducts = ProductData
      if (categoryOption === 'Electronics') {
        filteredProducts = ProductData.filter((item) => item.category === 'Electronics')
      } else if (categoryOption === 'Fashion') {
        filteredProducts = ProductData.filter((item) => item.category === 'Fashion')  
      } else if (categoryOption === "Home & Kitchen") {
        filteredProducts = ProductData.filter((item) => item.category === 'Home & Kitchen')
     } else if (categoryOption === "Sports & Fitness") {
      filteredProducts = ProductData.filter((item) => item.category === 'Sports & Fitness')
     }


     // Sorted products
     let sortedProducts = [...filteredProducts]

     if (sortOption === 'Lowest') {
        sortedProducts.sort((a, b) => a.price - b.price )
      } else if (sortOption === 'Highest') {
        sortedProducts.sort((a, b) => b.price - a.price)
      }

      setLimitedProducts(sortedProducts)
    }
    handleCategoryAndSort()

   
  }, [categoryOption, sortOption])

  

  const handleShowProducts = () => {
    // while (sortOption === 'Lowest') {
    //   const low = ProductData.sort((a, b) => a - b )
    //   setSortedProduts(low)
    //   return sortedProducts.map(product => <ProductCard key={product.id} product={product} />)
    // }

    
  }
  
  
  return (
    <div>
      <form style={{ display: 'flex', justifyContent: 'space-around'}}>
        <label>
          Sort:{" "}
          <select class="bg-transparent font-light outline-none" onChange={(e) => setSortOption(e.target.value)}>
            <option>Recommended</option>
            <option>Lowest</option>
            <option>Highest</option>
          </select>
        </label>
        {" "}
        <label>
          Category:{" "}
          <select class="bg-transparent font-light outline-none" onChange={(e) => setCategoryOption(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Kitchen</option>
            <option>Sports & Fitness</option>
          </select>
        </label>
      </form>
      <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
        {Array.isArray(ProductData) && ProductData.length > 0 && categoryOption === "All" && sortOption === "Recommended" ? ( ProductData.map((product) => <ProductCard key={product.id} product={product} />)) : 
        (
          limitedProducts.map( product => <ProductCard key={product.id} product={product} />)
        )}
      </span>
      <Pagination
        count={3}
        // page={page}
        onChange={(e) => setPage(Number(e.target.textContent) - 1)} 
        style={{ color: '#fff', display: 'flex', justifyContent: 'center'}}
        sx={{ color: 'blue'}} 
      />
    </div>
  )
}

export default Products