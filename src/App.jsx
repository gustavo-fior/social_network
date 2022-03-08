import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPage from "./pages/UserPage";
import UserHome from "./pages/UserHome";
import Post from "./pages/Post"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/home" element={<UserHome/>}/>
          <Route exact path="/user/:username" element={<UserPage/>}/>
          <Route exact path="/post" element={<Post/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
