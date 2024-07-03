import React from 'react'
import Products from '../Components/Products/Products'
import Header from '../Components/Header/Header'

const Home = ({setLoggedIn, loggedIn, id, setAdmin, isAdmin}) => {
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAdmin={setAdmin}/>
      <div className="container">
        <Products loggedIn={loggedIn} id={id} isAdmin={isAdmin}/>
      </div>
    </>
  )
}

export default Home