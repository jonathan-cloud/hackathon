import React, { useState, useEffect } from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import './Nav.css'

const Nav = () => {
  const [searchActive, setSearchActive] = useState(false)


  return (

    <div className="row-fluid">
      <Navbar bg="light" variant="success">
        <Navbar.Brand href="#home">GreenCycle</Navbar.Brand>
        <span onClick={() => setSearchActive(!searchActive)} className="search-icon">
          <i class="fa fa-search"></i>
        </span>

        
          <input className={`form-control search-input ${searchActive && "active"}`} />
        

      </Navbar>
    </div>

  )
}

export default Nav