import { useNavigate } from 'react-router-dom'
import '../styles/Navigation.scss'

const AppNav = () => {
   const navigate = useNavigate()
   const logout = async () => {
      await fetch('http://localhost:5000/api/auth/logout', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         credentials: 'include',
      })

      navigate('/')
   }

   return (
      <nav>
         <h1>Template <span>by feris</span></h1>
         <button className="log_out" onClick={() => logout()}>Log out</button>
      </nav>
   )
}

export default AppNav
