import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootRoute } from './routes/__root'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>,
)
