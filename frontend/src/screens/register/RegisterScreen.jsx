import './registerScreen.css'

const RegisterScreen = () => {
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
          <form className="loginBox">
            <input placeholder="Username" type="email" className="loginInput"/>
            <input placeholder="Email" type="email" className="loginInput"/>
            <input placeholder="Password" type="password" className="loginInput" />
            <input placeholder="Password Again" type="password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
