import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Sidebar from '../componets/Sidebar/Sidebar'
import {
  StartPage,
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
  Authorization,
  Registration,
} from '../pages'
import classes from './style.module.scss'
import Profill from '../pages/Profill/Profill'
import { ProfileProvider } from '../pages/ProfileContext/ProfileContext';
import Email from '../pages/EmailSide/Email'
import Notification from '../pages/notification/Notification'
import Econom from '../pages/Econom/Econom'
import ClientSearch from "../pages/ClientSearch/ClientSearch"
import Comfort from '../pages/Comfort/Comfort'
import Business from '../pages/Business/Business'
import Miniven from '../pages/Miniven/Miniven'
import ProfileCheck from '../pages/ProfilleCheck/ProfileCheck'

const Layout = ({ children, showSidebar }) => {
  return (
    <div className={classes.container}>
      {showSidebar && <Sidebar />}
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const List = () => {
  const location = useLocation()

  const noSidebarPaths = ['/', '/InfoClients', '/authorization', '/registration', '/not-found']
  const showSidebar = !noSidebarPaths.includes(location.pathname)

  return (
    <Layout showSidebar={showSidebar}>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/InfoClients' element={<InfoClient />} />
        <Route path='/moderation' element={<Modarate />} />
        <Route path='/driver' element={<DriverList />} />
        <Route path='/info' element={<Information />} />
        <Route path='/map' element={<Map />} />
        <Route path='/setting' element={<Settings />} />
        <Route path='/connection' element={<Connection />} />
        <Route path='/client' element={<ClientList />} />
        <Route path='/mapcart' element={<MapCart />} />
        <Route path='/ChatMessage/:driverId' element={<ChatMessage />} />
        <Route path='/check' element={<Check />} />
        <Route path='/profill' element={<Profill />} />
        <Route path='/email' element={<Email />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/clientSearch' element={<ClientSearch/>} />
        <Route path='/economclass' element={<Econom />} />
        <Route path='/comfortclass' element={<Comfort />} />
        <Route path='/businessclass' element={<Business />} />
        <Route path='/minivenclass' element={<Miniven />} />
        <Route path='/profilecheck' element={<ProfileCheck />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
        <ProfileProvider>
      <List />
      </ProfileProvider>  
    </BrowserRouter>
  )
}
