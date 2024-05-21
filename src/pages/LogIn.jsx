import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import LogInFrame from '../Components/LogInFrame/LogInFrame'

const Login = ( {setId, setLoggedIn} ) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onButtonClick = async () => {
    setError('')
    setId('')
    setLoggedIn(false)

    if ('' === login) {
      setError('Please enter your login')
      return
    }
  
    if ('' === password) {
      setError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setError('The password must be 8 characters or longer')
      return
    }

    const authString = `admin:admin`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(authString)
      },
      body: JSON.stringify({ login, password })
    };

    try {
      const response = await fetch('http://localhost:8080/login', requestOptions)
      const result = await response.json()

      if(response?.ok){
        setId(result.id)
        setLoggedIn(true)
        navigate('/')
      } else {
        setAuthorizationError('Invalid login or password')
      }

    } catch (error) {
      setAuthorizationError('Invalid login or password')
      console.error('Unexpected error', error)
    }    
  }
  
  return (
    <>
      <LogInFrame login={login} setLogin={setLogin} password={password} setPassword={setPassword} error={error} onButtonClick={onButtonClick}/>
    </>
  )
}


export default Login