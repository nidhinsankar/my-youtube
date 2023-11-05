import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React from 'react'
import VideoContainer from './components/VideoContainer'
import WatchPage from './pages/WatchPage'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './assets/store.js'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<VideoContainer />
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>,
)
