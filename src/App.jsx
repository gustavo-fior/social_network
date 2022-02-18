import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/user/:username" element={<UserPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
