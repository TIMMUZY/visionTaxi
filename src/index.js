import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './routes'
import { UserProvider } from './componets/UserContext/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <List />
    </UserProvider>
  </React.StrictMode>,
)
