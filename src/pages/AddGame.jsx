import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddGameFrame from '../Components/AddGameFrame/AddGameFrame'
import Header from '../Components/Header/Header'

const AddGame = ({loggedIn, setLoggedIn, id}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const navigate =  useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [])

  const onButtonClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description })
    };

    try {
      const response = await fetch(`http://localhost:8080/createProduct?userId=${id}`, requestOptions)

      if(response?.ok){
        navigate('/')
      }
      
    } catch (error) {
      setError('Error')
      console.error(error.message)
    }
  }

  return (
  <>
    <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    <div className="container">
      <AddGameFrame name={name} setName={setName} description={description} setDescription={setDescription} error={error} onButtonClick={onButtonClick} />
    </div>
  </>
    
  )
}

export default AddGame