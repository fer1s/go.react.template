import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Authorization.scss'

const Login = () => {
   const navigate = useNavigate()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = async () => {
      if (!email || !password) return
      // TODO: Log under button

      const response = await fetch('http://localhost:5000/api/auth/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         credentials: 'include',
         body: JSON.stringify({
            email,
            password,
         }),
      })

      navigate('/app')
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
                  <h1>Log in</h1>
                  <p>Log in into your account</p>
               </div>
               <div className="card_content">
                  <div className="input_container">
                     <p>E-mail</p>
                     <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input_container">
                     <p>Password</p>
                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button onClick={() => handleSubmit()}>Log in</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
