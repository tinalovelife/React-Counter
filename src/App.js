import React from "react";
import './App.css';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, isRunning: false };
  }

  addHandler = () => {
    this.ref = setInterval(() => {
      this.setState({ number: this.state.number + 1, isRunning: true })
    }, 1000)  
  }

  stopHandler = () => {
    clearInterval(this.ref);
    this.setState({ isRunning: false });
  }
  
  render() {
    const { number, isRunning } = this.state;

    return (
      <div className="container">
        <div className="number">{ number }</div>
        <div className="btn-group">
          <button onClick={!isRunning && this.addHandler}>Add</button>
          <button onClick={isRunning && this.stopHandler}>Pause</button>
        </div>
      </div>
    )
  }
}

export default App;