import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import StartPage from '../pages/StartPage/StartPage'
import { Authorization, ClientList, Connection, DriverList, Information, Map,   MapCart, Settings } from '../pages'
import classes from './style.module.scss'
import Moderate from '../pages/Modarate/Modarate'
import InfoClient from '../pages/InfoClient/InfoClient'
import ChatMessage from '../pages/ChatMessage/ChatMessage'
import Check from "../pages/Check/Check"
import Econom from '../pages/Econom/Econom'
import Profill from '../pages/Profill/Profill'

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
          <Route path='/check' element={<Check/>}/>
          <Route path='/info' element={<Information />} />
          <Route path='/map' element={<Map />} />
          <Route path='/setting' element={<Settings />}/>
          <Route path='/connection' element={<Connection />}/>
          <Route path='/client' element={<ClientList />}/>
          <Route path='/authorization' element={<Authorization />}/>
          <Route path='/mapcart' element={<MapCart />}/>
          <Route path='/infoClients' element={<InfoClient />}/>
          <Route path='/chatMessage/:driverId' element={<ChatMessage />}/>
          <Route path='/econom' element={<Econom />}/>
          <Route path='/profil' element={<Profill />}/>
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
