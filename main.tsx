import React from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './src/pages/home'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
