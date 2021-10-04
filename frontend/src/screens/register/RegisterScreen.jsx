import axios from 'axios'
import { useRef } from 'react'
import './registerScreen.css'
import { useHistory } from "react-router-dom"

const RegisterScreen = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault()

    if(passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }

      try {
        await axios.post("/auth/register", user)
        history.push("/login")
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">nexus</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on nexus.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" 
              className="loginInput"
              ref={username}
              required
            />
            <input placeholder="Email" 
              type="email" 
              className="loginInput"
              ref={email}
              required
            />
            <input placeholder="Password" 
              type="password" 
              className="loginInput" 
              ref={password}
              required
              minLength="6"
            />
            <input placeholder="Password Again" 
              type="password" 
              className="loginInput" 
              ref={passwordAgain}
              required
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
