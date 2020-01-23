import React, { createContext } from 'react'
import "./index.css";


export const LocationContext = createContext();

class Sidecomp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [],
      value: "",
      latitude: "",
      longitude: "",
    }
  }





  handleClick = (e) => {
    this.setState({
      values: [...this.state.values, e.target.value]
    })
    console.log(e.target.value)
    console.log(this.state.values)
  }

  render() {

    return (
      <>

        <div className="sidebar justify-content-center col-2">
          <div className="five-btn">
            <button className="bottles-btn" value="clothes" onClick={this.handleClick} >  </button>
          </div>
          <div>
            <button className="plastic-btn" value="plastic" onClick={this.handleClick}>  </button>
          </div>
          <div>
            <button className="carton-btn" value="carton" onClick={this.handleClick}>  </button>
          </div>
          <div className="third-btn">
            <button className="solar-btn" value="energy" onClick={this.handleClick}>  </button>
          </div>
          <div className="forth-btn">
            <button className="organic-btn" value="organic" onClick={this.handleClick}>  </button>
          </div>
          <div className="five-btn">
            <button className="clothes-btn" value="clothes" onClick={this.handleClick} >  </button>
          </div>

        </div>


      </>
    )
  }
}

export default Sidecomp