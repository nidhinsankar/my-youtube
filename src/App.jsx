import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import VideoContainer from "./components/VideoContainer"
import WatchPage from "./pages/WatchPage"


/**
 * 
 * HEADER
 * BODY
 *  - SIDEBAR
 *  - MAIN-CONTAINER
 *     - BUTTONLIST
 *     - VIDEOCARD CONTAINER
 *     - LIST OF VIDEOCARD 
 * 
 */

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
        path:'/watch?v=',
        element:<WatchPage/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}>
      <Header/>
      <Home />
    </RouterProvider>
  )
}

export default App
