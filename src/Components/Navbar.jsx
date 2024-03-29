import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { removeUserToken } from '../Auth/AuthLocalStorage'
import { Button } from '@mui/material'

const Navbar = ({ isVerified, setShouldRefresh, user, setIsVerified, setUser, userCart }) => {
  const handleLogout = async () => {
    setShouldRefresh(true)
    const resultLogout = removeUserToken()
    if (resultLogout) {
      setIsVerified(false)
      setUser(null)
      setShouldRefresh(false)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Link><button class="btn">Home</button></Link>
      {isVerified ? (
        <div className='client-nav'>
          <Link to={"/home/profile"}><Button>{user}</Button></Link>
          {" "}
          <Link to={"/cart"}><button class="btn">Cart({userCart.length})</button></Link>
          {" "}
          <Link onClick={handleLogout}><button class="btn">Logout</button></Link>
        </div>
      ) : (
        <div className='client-nav'>
            <Link to={"/register"}><button class="btn">Register</button></Link>
            {" "}
            <Link to={"/login"}><button class="btn">Login</button></Link>
        </div>
      )}
    </div>
  )
}

export default Navbar

