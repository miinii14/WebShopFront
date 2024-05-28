import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="container">
          <ul>
            <li onClick={(event) => navigate('/')}>Home</li>
            {
              loggedIn ? (<><li onClick={(eveny) => navigate('/library')}>My library</li><li onClick={(event) => navigate('/cart')}>My Cart</li><li onClick={(event) => setLoggedIn(false)}>Logout</li></>) : (<li onClick={(event) => navigate('/login')}>Log in</li>)
            }
            
          </ul>

      </div>
    </div>
  )
}

export default Header