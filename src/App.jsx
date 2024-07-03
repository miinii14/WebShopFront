import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/LogIn.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Registration from './pages/Registration.jsx'
import AddGame from './pages/AddGame.jsx'
import Header from './Components/Header/Header.jsx'
import Cart from './pages/Cart.jsx'
import Library from './pages/Library.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    const saved = localStorage.getItem('loggedIn');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [isAdmin, setAdmin] = useState(() => {
    const saved = localStorage.getItem('isAdmin');
    return saved !== null ? JSON.parse(saved) : false;
  })

  const [id, setId] = useState(() => {
    const savedId = localStorage.getItem('id');
    return savedId !== null ? savedId : '';
  });

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem('id', id);
  }, [id]);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin);
  }, [isAdmin]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn} isAdmin={isAdmin} setAdmin={setAdmin}/>}/>
          <Route path='/login' element={<Login id={id} setLoggedIn={setLoggedIn} setId={setId} setAdmin={setAdmin}/>}/>
          <Route path='/register' element={<Registration id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path='/addGame' element={<AddGame id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path='/cart' element={<Cart loggedIn={loggedIn} id={id} setLoggedIn={setLoggedIn} />} />
          <Route path='/library' element={<Library loggedIn={loggedIn} userId={id} setLoggedIn={setLoggedIn} />} />
          <Route path='*' element={<NoPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
