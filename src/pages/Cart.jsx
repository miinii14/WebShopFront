import React, { useEffect } from 'react'
import CartProducts from '../Components/CartProducts/CartProducts'
import Header from '../Components/Header/Header'
import { useNavigate } from 'react-router-dom'

const Cart = ({loggedIn, id, setLoggedIn}) => {
  const navigator = useNavigate()
  
  useEffect(() => {
    if(!loggedIn)
      navigator('/login')
  })

  return (
    
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="container">
        <CartProducts userId={id}/>
      </div>
    </>    
  )
}

export default Cart