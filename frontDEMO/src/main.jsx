import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Toaster} from 'react-hot-toast'

import {RouterProvider} from 'react-router-dom'
import {router} from './router/index.jsx'
import ContextWrapper from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <Toaster position='top-right' reverseOrder={false} />
      <RouterProvider router={router} />

    </ContextWrapper>
  </React.StrictMode>
)
