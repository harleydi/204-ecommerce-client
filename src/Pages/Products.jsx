import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { getLimitedProducts, getProducts } from '../Api/api'
import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import { deepOrange, indigo } from '@mui/material/colors'
import { BorderColor } from '@mui/icons-material'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const [allProducts, setAllProducts] = useState([])
  const [limitedProducts, setLimitedProducts] = useState([])
  const [sortOption, setSortOption] = useState('Recommended')
  const [categoryOption, setCategoryOption] = useState('')
  const [page, setPage] = useState(0)

  const { setShouldRefresh, shouldRefresh } = useOutletContext()


  useEffect(() => {
    const getAll = async () => {
      const data = await getProducts()
      setAllProducts(data.data)
      console.log(data)
    }
    getAll()
  }, [])

  useEffect(() => {
    const getLimited = async () => {
      const data = await getLimitedProducts(page)
      setLimitedProducts(data.data)
      // console.log(data.data)
      return data.data
    }
    getLimited()
    console.log(limitedProducts)
  }, [page])

  useEffect(() => {
    const handleSort = async () => {
      if (categoryOption === 'Electronics') {
        const electronics = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
        console.log(electronics)
        setLimitedProducts(electronics)
      } else if (categoryOption === 'Jewelery') {
         const jewelery = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
         setLimitedProducts(jewelery)
      } else if (categoryOption === "Men's clothing") {
        const mens = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
        setLimitedProducts(mens)
     } else if (categoryOption === "Women's clothing") {
      const womens = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
      setLimitedProducts(womens)
     } else {
      const data = await getLimitedProducts(page)
      setLimitedProducts(data.data)
     }
    }
    handleSort()
  }, [categoryOption])

  
  const renderProducts = (arr, ) => {

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
            <option>Jewelery</option>
            <option>Men's clothing</option>
            <option>Women's clothing</option>
          </select>
        </label>
      </form>
      <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
        {limitedProducts.length > 0 && limitedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </span>
      <Pagination
        count={3}
        // page={page}
        onChange={(e) => setPage(Number(e.target.textContent) - 1)} 
        style={{ display: 'flex', justifyContent: 'center' }}
        sx={{ color: 'white'}} 
      />
    </div>
  )
}

export default Products