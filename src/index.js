import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './containers/Home'
import GlobalStyle from './styles/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
)
