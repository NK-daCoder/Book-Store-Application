import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// have to install redux
import store from './redux/store'
import { Provider } from 'react-redux'

// have to install react router-dom
import { RouterProvider } from 'react-router'
import router from './routers/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
