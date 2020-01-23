import React from 'react'
import "./index.css";
import { geolocated } from "react-geolocated";

console.log(geolocated)
class Sidecomp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values:[],
      value: ""
    }
  }

  handleClick = (e) => {
    this.setState({
      values: [...this.state.values,e.target.value]
    })
    console.log(e.target.value)
    console.log(this.state.values)
  }

  render() {
    return (
      <>

      <div className="col-2">
        <div className="first-btn">
          <button value="glass" onClick={this.handleClick}> 1GLASS </button>
        </div>
        <div className="second-btn">
          <button value="plastic" onClick={this.handleClick}> GLASS </button>
        </div>
        <div className="third-btn">
          <button value="carton" onClick={this.handleClick}> GLASS </button>
        </div>
        <div className="forth-btn">
          <button value="energy" onClick={this.handleClick}> GLASS </button>
        </div>
        <div className="five-btn">
          <button value="organic waste" onClick={this.handleClick} > GLASS </button>
        </div>
        <div className="six-btn">
          <button value="clothes" onClick={this.handleClick}> GLASS </button>
        </div>
      </div>
      
      </>
    )
  }
}

export default Sidecomp