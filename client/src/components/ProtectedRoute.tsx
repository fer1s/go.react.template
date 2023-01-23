import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loader from './Loader'
import AppNav from './AppNav'

const ProtectedRoute = () => {
   const navigate = useNavigate()

   const [gotCallback, setGotCallback] = useState(false)
   const [user, setUser] = useState({})

   const checkAuth = async () => {
      const response = await fetch('http://localhost:5000/api/auth/user', {
         headers: { 'Content-Type': 'application/json' },
         credentials: 'include',
      })

      const content = await response.json()
      setGotCallback(true)

      if (content.message && content.message == 'unauthenticated') {
         return navigate('/')
      }

      setUser(content)
   }
   useEffect(() => {
      checkAuth()
   }, [])

   return gotCallback ? (
      user ? (
         <>
            <AppNav />
            <div className="App">
               <Outlet context={user} />
            </div>
         </>
      ) : (
         <Navigate to="/" />
      )
   ) : (
      <Loader />
   )
}

export default ProtectedRoute
