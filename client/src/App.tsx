import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// Protected
import MainApp from "./pages/Protected/App"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="app" element={<ProtectedRoute />}>
            <Route index element={<MainApp/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
