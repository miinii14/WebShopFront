import React from 'react'
import './Products.css'

const ProductCard = ({userId, id, name, description, loggedIn}) => {

  const addToCart = async () => {

    const authString = `admin:admin`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(authString)
      }
    };

    try {
      const response = await fetch(`http://localhost:8080/addToCart?productId=${id}&userId=${userId}`, requestOptions)

      console.log(response)

    } catch (error) {
      setError('Failed to add game to the cart')
      console.error('Unexpected error', error)
    }
  }

  return (
    <>
      <div className="productCard">
        <h3>{name}</h3>
        <p>{description}</p>
        {loggedIn ? (<input className="buyButton" value='addToCart' type="button" onClick={addToCart}/>) : ('')}
      </div>
      
    </>
  )
}

export default ProductCard