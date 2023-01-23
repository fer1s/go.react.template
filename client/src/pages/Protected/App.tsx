import { useOutletContext } from 'react-router-dom'
import { User } from '../../types/User'

const MainApp = () => {
   const user: User = useOutletContext()

   return (
      <div className="padding">
         <h1>Welcome, {user.username}</h1>
      </div>
   )
}

export default MainApp
