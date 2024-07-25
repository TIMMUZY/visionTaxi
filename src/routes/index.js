import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import StartPage from '../pages/StartPage/StartPage'
import Order from '../pages/Order/Order'
import { DriverList } from "../pages"
import classes from './style.module.scss'

const Layout = () => {
  const location = useLocation()
  
  const noSidebarPaths = ['/', '/yet-another-page']

  const showSidebar = !noSidebarPaths.includes(location.pathname)

  return (
    <div className={classes.container}>
      {showSidebar && <Sidebar />}
      <div className={classes.content}>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='order' element={<Order />} />
          <Route path='driver' element={<DriverList />} />
        </Routes>
      </div>
    </div>
  )
}

const List = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default List
