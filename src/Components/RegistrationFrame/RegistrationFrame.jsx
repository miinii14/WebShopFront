import React from 'react'
import './RegistrationFrame.css'

const RegistrationFrame = ({name, setName, lastName, setLastName, email, setEmail, login, setLogin, password, setPassword, error, onButtonClick}) => {
  return (
    <>
      <div className="container">
        <div className="registration">
          <h2>REGISTRATION</h2>
          <label>{error}</label>
          <input className='inputText' value={name} placeholder='Enter your name' onChange={(event) => setName(event.target.value)} />
          <input className='inputText' value={lastName} placeholder='Enter your last name' onChange={(event) => setLastName(event.target.value)} />
          <input className='inputText' value={email} placeholder='Enter your email' onChange={(event) => setEmail(event.target.value)} />
          <input className='inputText' value={login} placeholder='Enter your login' onChange={(event) => setLogin(event.target.value)} />
          <input className='inputText' value={password} placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)} />
          <input className='button' type="button" value='Create account' onClick={onButtonClick}/>
        </div>
      </div>
    </>
  )
}

export default RegistrationFrame