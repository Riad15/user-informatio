
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Component/Header/Header';
import Login from './Component/Login/Login'
import SignUp from "./Component/SignUp/SignUp";
import CustomerInfo from "./Component/CustomerInfo/CustomerInfo";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/customerInfo' element={<CustomerInfo></CustomerInfo>}></Route>
        <Route path='/customerForm' element={<CustomerInfo></CustomerInfo>}></Route>

      </Routes>

    </div>
  );
}

export default App;
