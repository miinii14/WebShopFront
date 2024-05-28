import React, { useEffect } from 'react'
import LibraryProducts from '../Components/LibraryProducts/LibraryProducts'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header'

const Library = ({userId, loggedIn, setLoggedIn}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!loggedIn)
      navigate('/login')
  }, [loggedIn])

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div className="container">
        <LibraryProducts userId={userId} />
      </div>
    </>
    
  )
}

export default Library