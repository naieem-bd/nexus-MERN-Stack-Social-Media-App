import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { user ? <HomeScreen /> : <RegisterScreen /> }
        </Route>
        <Route path="/login">
          { user ? <Redirect to="/" /> : <LoginScreen /> }
        </Route>
        <Route path="/register">
          { user ? <Redirect to="/" /> : <RegisterScreen /> }
        </Route>
        <Route path="/profile/:username">
          <ProfileScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;