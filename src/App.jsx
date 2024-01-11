import React from 'react'
import DeshboardHome from "./pages/DeshboardHome";
import AllNav from './components/AllNav'
import LoginForm from './components/LoginForm'
import InputForm from './components/InputForm'



const App = () => {
  return (
    <div>
      <AllNav />
      <DeshboardHome />
      <LoginForm/>
      <InputForm/>
    </div>
  );
};



export default App