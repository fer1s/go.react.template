import { Link } from 'react-router-dom'
import '../styles/Home.scss'

const Home = () => {
   return (
      <div className="center_content home">
         <div className="logos">
            <a href="https://go.dev/" target="_blank">
               <img src="/go.svg" alt="go logo" />
            </a>
            <a href="https://reactjs.org/" target="_blank">
               <img src="/react.svg" alt="react logo" />
            </a>
         </div>
         <h1>Authorization template</h1>
         <p>
            Made by <a href="https://github.com/fer1s">feris</a>
         </p>
         <hr />
         <div className="row">
            <Link className='button_style' to="/login">Log in</Link>
            <Link className='button_style' to="/register">Register</Link>
         </div>
      </div>
   )
}

export default Home
