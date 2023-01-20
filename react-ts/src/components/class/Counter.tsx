import { Component } from "react";
import { CounterProps } from '../types/CounterProps.type';
import { CounterState } from '../types/CounterState.type';

export class Counter extends Component<CounterProps, CounterState> {
  state= {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return(
      <>
        <button onClick={this.decrement}>-</button>
        {this.props.message} {this.state.count}
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
