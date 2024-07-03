import React from 'react'
import './Products.css'

const ProductCard = ({userId, id, name, description, loggedIn, isAdmin}) => {

  const addToCart = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

  const removeFromCart = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    try {
      const response = await fetch(`http://localhost:8080/removeFromCart?productId=${id}&userId=${userId}`, requestOptions)
      console.log(response)

    } catch (error) {
      setError('failed')
      console.error('Unexpected error', error)
    }
  }

  const deleteProduct = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    try {
      const response = await fetch(`http://localhost:8080/deleteProduct?productId=${id}&userId=${userId}`, requestOptions)
      console.log(response)
    } catch (error) {
      setError('failed')
      console.error('Unexpected error', error)
    }
  }

  return (
    <>
      <div className="productCard">
        <h3>{name}</h3>
        <p>{description}</p>
        {loggedIn ? (<input className="buyButton" value='addToCart' type="button" onClick={addToCart}/>) : ('')}
        {loggedIn ? (<input className="buyButton" value='remove' type="button" onClick={removeFromCart}/> ) : ('')}
        {loggedIn && isAdmin ? (<input className="buyButton remove" value='delete' type="button" onClick={deleteProduct}/> ) : ('') }
      </div>
      
    </>
  )
}

export default ProductCard