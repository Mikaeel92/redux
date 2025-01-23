import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import { Provider } from 'react-redux'
import { store } from './Store'

const App = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <Provider store={store}>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/contact'>Contact</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  )
}

export default App