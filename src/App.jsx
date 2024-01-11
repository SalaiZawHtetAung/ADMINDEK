import React from 'react'
import DeshboardHome from "./pages/DeshboardHome";
import AllNav from './components/AllNav'
import LoginForm from './components/LoginForm'


const App = () => {
  return (
    <div>
      <AllNav />
      <DeshboardHome />
      <LoginForm/>
    </div>
  );
};



export default App