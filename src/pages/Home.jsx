import React from 'react'
import Products from '../Components/Products/Products'
import Header from '../Components/Header/Header'

const Home = ({setLoggedIn, loggedIn, id}) => {
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="container">
        <Products loggedIn={loggedIn} id={id}/>
      </div>
    </>
  )
}

export default Home