import React, { useEffect, useState } from 'react'
import './LibraryProducts.css'

const authString = btoa('admin:admin')


const LibraryProducts = ({userId}) => {
  const [products, setProducts] = useState([])
  const [ids, setIds] = useState([])

  useEffect(() => {
    const requestOptions = {
      headers: {
        'Authorization': 'Basic ' + authString
      }
    }

    const getLibrary = async () => {
      try {
        let response = await fetch(`http://localhost:8080/library?userId=${userId}`, requestOptions);
        let result = await response.json();

        if (response.ok) {
          setIds(result);
        }
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };

    getLibrary();
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
      console.log('products')
      console.log(products)
    };

    if (ids.length > 0) {
      fetchProducts();
    }
  }, [ids]);

  return (
    <div className="libraryProducts">
      {products.map((product) => (
        <div className="libraryProduct" key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default LibraryProducts