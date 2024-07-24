import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from '../componets'
import { Navbar, StartPage } from '../pages'

const List = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route element={<Navbar />}>
          <Route path='/menu' element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default List
