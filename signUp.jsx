import '../css/Login.css'
import { Link } from 'react-router-dom'
export default function SignUp(){

    return (
            <div  className='container'>    
              <div className="Login">
                <h3>SIGN UP </h3>
                <input type="name" placeholder="name  "/>
                <input type="email" placeholder="Email address  "/>
                <input type="password" placeholder="password "/>
                <button>Sign up</button>
                
                <Link to="/" style={{color:'white'}}>Log in</Link>
              </div>
            </div>
        )
};