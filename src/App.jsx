import { Provider } from "react-redux"
import store from "./assets/store"
import Header from "./components/Header"
import Home from "./pages/Home"


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



function App() {

  return (
    <Provider store={store}>
      <Header/>
      <Home />
    </Provider>
  )
}

export default App
