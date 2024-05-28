import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

const Products = ({loggedIn, id}) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate();

  useEffect(() => {

    const getProducts = async () => {
      const authString = btoa(`admin:admin`)
      const requestOptions = {
        headers: {
          'Authorization': 'Basic ' + authString
        }
      }

      try {
        const response = await fetch('http://localhost:8080/getProducts', requestOptions)
        const result = await response.json()
  
        console.log(response)
        console.log(result)

        if(response?.ok){
          setProducts(result)
        } else {
          setError(response.message)
        }
      
      } catch (error) {
        setError('Failed to get products')
        console.error('Unexpected error', error)
      }
    }

    getProducts(); 
  }, [])

  const onButtonClick = () => {
    if(!loggedIn)
      navigate('/login')
    else
      navigate('/addGame')
  }

  return (
    <>
      <label className='error'>{error}</label>
      <div className="products">
        {products.map((product) => (
          <ProductCard loggedIn={loggedIn} userId={id} id={product.id} name={product.name} description={product.description}/>
        ))}
      </div>
      <input className='button' type="button" value='Add your own game' onClick={onButtonClick}/>
    </>
  )
}

export default Products