import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Main from './components/Main';
import User from './components/User';
import AllDataF from './components/AllDataF';
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<Main/>} />
            <Route path="/user" element={<User/>} />
            <Route path='/all' element={<AllDataF/>} />
        </Routes>
      </Router>
     

    </>
  )
}

export default App
