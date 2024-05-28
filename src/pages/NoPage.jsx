import React from 'react'
import Header from '../Components/Header/Header'

const NoPage = ({loggedIn, setLoggedIn}) => {
  return (
    <>
    <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="container">
        <h1>Error 404: No page</h1>
      </div>
    </>
  )
}

export default NoPage