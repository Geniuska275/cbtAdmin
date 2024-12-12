import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Settings from "./pages/settings"
import Proctoring from "./pages/Proctoring"

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index component={<Home/>}/>
        <Route path='settings' element={<Settings/>} />
        <Route path="proctoring" element={<Proctoring/>}/>
        <Route path="users" element={<Users/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
