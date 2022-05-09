
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Component/Header/Header';
import Login from './Component/Login/Login'
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>

    </div>
  );
}

export default App;
