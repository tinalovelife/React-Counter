import React from "react";
import './App.css';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  addHandler = () => {
    this.ref = setInterval(() => {
      this.setState({ number: this.state.number + 1 })
    }, 1000)  
  }

  stopHandler = () => {
    clearInterval(this.ref);
  }
  
  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <div className="number">{ number }</div>
        <div className="btn-group">
          <button onClick={this.addHandler}>Add</button>
          <button onClick={this.stopHandler}>Pause</button>
        </div>
      </div>
    )
  }
}

export default App;