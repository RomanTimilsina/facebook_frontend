import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>
            Hello World
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum accusamus nobis quam mollitia, saepe esse et quas quasi fugiat unde reprehenderit, ab sunt distinctio qui. Hic maiores nulla tenetur reiciendis?
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>
            Login
          </button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='password' />
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='name'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
