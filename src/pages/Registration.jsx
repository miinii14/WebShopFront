import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import RegistrationFrame from '../Components/RegistrationFrame/RegistrationFrame';
import Header from '../Components/Header/Header'

const Registration = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const onButtonClick = async () => {
    setError('')
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/

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

    if(!passwordRegex.test(password)){
      setError('The password must contain letters and numbers')
      return
    }

    const authString = `admin:admin`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(authString)
      },
      body: JSON.stringify({ login, password, email, name, lastName})
    };

    try {
      const response = await fetch('http://localhost:8080/register', requestOptions)

      if(response?.ok){
        navigate('/login')
      } 

    } catch (error) {
      setError('User with such login already exists')
      console.error('Unexpected error', error)
    }    
  }
  
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <RegistrationFrame name={name} setName={setName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} login={login} setLogin={setLogin} password={password} setPassword={setPassword} error={error} onButtonClick={onButtonClick} />
    </>
  )
}

export default Registration