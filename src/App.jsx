import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/LogIn.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [id, setId] = useState('')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setId={setId}/>}/>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
