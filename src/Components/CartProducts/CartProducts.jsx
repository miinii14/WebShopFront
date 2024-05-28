import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CartProducts.css'

const authString = btoa(`admin:admin`)

const CartProducts = ({userId}) => {
  const [products, setProducts] = useState([])
  const [ids, setIds] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const requestOptions = {
      headers: {
        'Authorization': 'Basic ' + authString
      }
    }

    const getCart = async () => {
      try {
        let response = await fetch(`http://localhost:8080/getCart?userId=${userId}`, requestOptions);
        let result = await response.json();

        if (response.ok) {
          setIds(result);
        }
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    getCart();
  }, [userId]);

  useEffect(() => {
    const requestOptions = {
      headers: {
        'Authorization': 'Basic ' + authString
      }
    }

    const fetchProducts = async () => {

      const productsArray = await Promise.all(
        ids.map(async (id) => {
          let response = await fetch(`http://localhost:8080/getProduct?productId=${id}`, requestOptions);
          return response.json();
        })
      );

      setProducts(productsArray);
    };

    if (ids.length > 0) {
      fetchProducts();
    }
  }, [ids]);

  const onBuyClick = async() => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + authString
      }
    }
    try {
      let response = await fetch(`http://localhost:8080/buy?userId=${userId}`, requestOptions);
      if(response?.ok){
        navigate('/')
      }
    } catch(error) {}
  }

  return (
    <>
      <div className="cart">
        <h2>Products in cart</h2>
          <div className="cartProducts">    

            {products.map((product) => (
              <div className="cartProduct" key={product.id}>
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
          <input className="buyButton" value="buy" type="button" onClick={onBuyClick}/> 
      </div>
    </>
    
  )
}

export default CartProducts