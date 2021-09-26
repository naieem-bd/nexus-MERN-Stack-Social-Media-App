import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/profile/:username">
          <ProfileScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;