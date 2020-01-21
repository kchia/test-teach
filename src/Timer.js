import React from 'react';
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
  }

  handleClick = () => {
    setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  };

  render() {
    if (this.state.count <= 0) {
      return <div>You are out of time!</div>;
    } else {
      return (
        <div>
          <p>Counting down: {this.state.count}</p>
          <button onClick={this.handleClick}>Start Count</button>
        </div>
      );
    }
  }
}

export default Timer;
