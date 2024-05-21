import React from 'react'
import './LogInFrame.css'

const LogInFrame = ({login, setLogin, password, setPassword, error, onButtonClick}) => {
  
  return (
    <>
      <div className="container">
        <div className="logIn">
          <h2>LOG IN</h2>
          <label>{error}</label>
          <input className='inputText' value={login} placeholder='Enter your login' onChange={(event) => setLogin(event.target.value)} />
          <input className='inputText' value={password} placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)} />
          <input className='button' type="button" value='Log in' onClick={onButtonClick}/>
        </div>
      </div>
    </>
  )
}

export default LogInFrame