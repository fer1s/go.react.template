import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Authorization.scss'

const Register = () => {
   const navigate = useNavigate()

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = async () => {
      if (!username || !email || !password) return
      // TODO: Log under button

      await fetch('http://localhost:5000/api/auth/register', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            username,
            email,
            password,
         }),
      })

      navigate('/login')
   }

   return (
      <>
         <div className="back_arrow">
            <Link to="/">
               <i className="bx bx-left-arrow-alt"></i>
            </Link>
         </div>
         <div className="center_content">
            <div className="auth_card">
               <div className="card_header">
                  <h1>Register</h1>
                  <p>Create account</p>
               </div>
               <div className="card_content">
                  <div className="input_container">
                     <p>Username</p>
                     <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="input_container">
                     <p>E-mail</p>
                     <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input_container">
                     <p>Password</p>
                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button onClick={() => handleSubmit()}>Register</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Register
