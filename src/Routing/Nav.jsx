import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'

function Nav() {
  return (
    
    <BrowserRouter>
    <div>
     <a href="/"></a>
    </div>
    <Routes>
        <Route path='/' element={<Nav2/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}
    function Nav2() {
        return<>
        <nav>
        <ul>
            <a href="/home"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
           <a href="/services"> <li>Sevices</li></a>
            <a href="/contact"><li>Contact Us</li></a>
        </ul>
      </nav></>
    }
export default Nav
