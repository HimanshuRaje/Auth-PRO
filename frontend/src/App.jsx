
import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState(0)
  const [password, setPassword] = useState(0)

  return (
     <div className="page-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@email.com" onChange={()=>{
              setEmail()
            }} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default App
