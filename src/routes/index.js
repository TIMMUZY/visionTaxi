import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import Navbar from '../pages/NavBar/NavBar'
import StartPage from '../pages/StartPage/StartPage'
import classes from './style.module.scss' 
import DriverList from '../pages/driver-list/DriverList'

const List = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.content}>
          <Routes>
            <Route path='/' element={<StartPage />} />
              <Route path='/driver' element={<DriverList />} />
            <Route element={<Navbar />}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default List