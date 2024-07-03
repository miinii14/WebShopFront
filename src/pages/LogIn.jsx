import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import LogInFrame from '../Components/LogInFrame/LogInFrame'
import Header from '../Components/Header/Header'

const Login = ( {setId, setLoggedIn, loggedIn ,setAdmin } ) => {
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

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    };

    try { 
      const response = await fetch('http://localhost:8080/login', requestOptions)
      const result = await response.json()

      console.log(response)
      console.log(result)

      if(response?.ok){
        setId(result.id)
        setLoggedIn(true)
        setAdmin(result.roles[0].name == "ADMIN" ? true : false);
        navigate('/')
      }

    } catch (error) {
      setError('Invalid login or password')
      console.error('Unexpected error', error)
    }    
  }
  
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <LogInFrame login={login} setLogin={setLogin} password={password} setPassword={setPassword} error={error} onButtonClick={onButtonClick}/>
    </>
  )
}


export default Login