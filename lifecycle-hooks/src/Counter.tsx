import React, { Component } from 'react';
import './App.css';
import Button from "react-bootstrap/Button"


export class Counter extends Component<any, any> {
  increment: () => void;
  decrement: () => void;
  constructor(props: any){
    super(props)

    this.state = {
      counter: 0
    }
    
      this.increment = () => this.setState({counter: this.state.counter + 1})

      this.decrement = () => this.setState({counter: this.state.counter - 1})
  }

  componentDidMount(){
    console.log("Component mounted!")
  }
  
  render() {
    return(
      <div>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
        <Button className="m-3" onClick={this.increment}>Increment</Button>
        <Button className="m-3" onClick={this.decrement}>Decrement</Button>
      </div>
    )
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
    console.log("Component did update!")
  }

  componentWillUnmount(){
    console.log("Component Will UnMount!")
  }
}


