import react from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './header/Header';
import Home from './home/Home';
import Error from './Error';
import Login from './login/Login';
import Checkout from './checkout/Checkout';




function App() {
  return (

    <Router>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </Router>
  )


}

export default App;
