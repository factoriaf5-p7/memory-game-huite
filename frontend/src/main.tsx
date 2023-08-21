import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
)
