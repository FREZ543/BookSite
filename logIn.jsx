import '../css/Login.css'
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div  className='container'>
        
    <div className="Login">
        <h3>LOG IN </h3>
        <input type="email" placeholder="Email address  "/>
        <input type="password" placeholder="password "/>
        <button>Log in</button>
        <Link to="#" id="">forget my password</Link>
        <Link to="/SignUp" style={{color:'white'}}>Sign up</Link>
    </div>
    </div>
  )
}

export default LogIn;
