import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import StartPage from '../pages/StartPage/StartPage'
import { Authorization, ClientList, Connection, DriverList, Information, Map, MapCart, Settings } from '../pages'
import classes from './style.module.scss'
import Moderate from '../pages/Modarate/Modarate'
import InfoClient from '../pages/InfoClient/InfoClient'

const Layout = () => {
  const location = useLocation()

  const noSidebarPaths = ['/', '/authorization', '/InfoClients']

  const showSidebar = !noSidebarPaths.includes(location.pathname)

  return (
    <div className={classes.container}>
      {showSidebar && <Sidebar />}
      <div className={classes.content}>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/moderation' element={<Moderate />} />
          <Route path='/driver' element={<DriverList />} />
          <Route path='/info' element={<Information />} />
          <Route path='/map' element={<Map />} />
          <Route path='/setting' element={<Settings />}/>
          <Route path='/connection' element={<Connection />}/>
          <Route path='/client' element={<ClientList />}/>
          <Route path='/authorization' element={<Authorization />}/>
          <Route path='/mapcart' element={<MapCart />}/>
          <Route path='/InfoClients' element={<InfoClient />}/>
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
