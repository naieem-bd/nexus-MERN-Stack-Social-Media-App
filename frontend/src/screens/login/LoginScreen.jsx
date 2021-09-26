import './loginScreen.css'

const LoginScreen = () => {
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
            <input placeholder="Email" type="email" className="loginInput"/>
            <input placeholder="Password" type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
