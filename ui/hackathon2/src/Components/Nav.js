import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row-fluid">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  )
}

export default Nav