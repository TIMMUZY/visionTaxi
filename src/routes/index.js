import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import {
  Authorization,
  ClientList,
  Connection,
  DriverList,
  Information,
  Map,
  MapCart,
  NotFound,
  Settings,
  ChatMessage,
  InfoClient,
  Modarate
  
} from '../pages'
import classes from './style.module.scss'
<<<<<<< HEAD
import Moderate from '../pages/Modarate/Modarate'
import InfoClient from '../pages/InfoClient/InfoClient'
import ChatMessage from '../pages/ChatMessage/ChatMessage'
import Check from "../pages/Check/Check"
import Econom from '../pages/Econom/Econom'
import Profill from '../pages/Profill/Profill'
=======

// Layout for pages with Sidebar
const LayoutWithSidebar = ({ children }) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

// Layout for pages without Sidebar
const LayoutWithoutSidebar = ({ children }) => {
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}
>>>>>>> 4b798f8f5f72c2dfceb37cdb7af6930c90cdd714

const Layout = () => {
  const location = useLocation()

  // Define the routes that should not have a Sidebar
  const noSidebarPaths = ['/', '/authorization', '/InfoClients', '/not-found']

  // Determine whether to show the Sidebar
  const showSidebar = !noSidebarPaths.includes(location.pathname)

  return (
<<<<<<< HEAD
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
=======
    <>
      {showSidebar ? (
        <LayoutWithSidebar>
          <Routes>
            <Route path='/moderation' element={<Modarate />} />
            <Route path='/driver' element={<DriverList />} />
            <Route path='/info' element={<Information />} />
            <Route path='/map' element={<Map />} />
            <Route path='/setting' element={<Settings />} />
            <Route path='/connection' element={<Connection />} />
            <Route path='/client' element={<ClientList />} />
            <Route path='/mapcart' element={<MapCart />} />
            <Route path='/InfoClients' element={<InfoClient />} />
            <Route path='/ChatMessage/:driverId' element={<ChatMessage />} />
            {/* Redirect all other paths to not-found */}
            <Route path='*' element={<Navigate to="/not-found" />} />
          </Routes>
        </LayoutWithSidebar>
      ) : (
        <LayoutWithoutSidebar>
          <Routes>
            <Route path='/' element={<Authorization />} />
            <Route path='/authorization' element={<Authorization />} />
            <Route path='/not-found' element={<NotFound />} />
            {/* Redirect all other paths to not-found */}
            <Route path='*' element={<Navigate to="/not-found" />} />
          </Routes>
        </LayoutWithoutSidebar>
      )}
    </>
>>>>>>> 4b798f8f5f72c2dfceb37cdb7af6930c90cdd714
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
