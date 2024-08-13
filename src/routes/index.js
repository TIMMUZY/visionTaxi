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
  Modarate,
  Check,
} from '../pages'
import classes from './style.module.scss'

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const LayoutWithoutSidebar = ({ children }) => {
  return <div className={classes.content}>{children}</div>
}

const Layout = () => {
  const location = useLocation()

  const noSidebarPaths = ['/', '/authorization', '/InfoClients', '/not-found']

  const showSidebar = !noSidebarPaths.includes(location.pathname)

  return (
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
            <Route path='/check' element={<Check />} />
            <Route path='/ChatMessage/:driverId' element={<ChatMessage />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
          </Routes>
        </LayoutWithSidebar>
      ) : (
        <LayoutWithoutSidebar>
          <Routes>
            <Route path='/' element={<Authorization />} />
            <Route path='/InfoClients' element={<InfoClient />} />
            <Route path='/authorization' element={<Authorization />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
          </Routes>
        </LayoutWithoutSidebar>
      )}
    </>
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
