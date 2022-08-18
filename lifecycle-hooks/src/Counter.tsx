import React, { Component } from 'react';
import './App.css';
import Button from "react-bootstrap/Button"

// const ErrorComponent = ()=>{
//   return <div>{props.ignore}</div>
// }

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

  static getDerivedStateFromProps(props: any, state: any){
    if(props.seed && state.seed !== props.seed){
      return {seed: props.seed, counter: props.seed}
    }
    return null
  }

  componentDidMount(){
    console.log("Component mounted!")
  }
  
  shouldComponentUpdate(nextProps: any, nextState: any){
    if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
      return false
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any){
    return null
  }

  render() {
    if(this.state.error){
      return <div>Encountered an error ({this.state.error})</div>
    }
    return(
      <div>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
        <Button className="m-3" onClick={this.increment}>Increment</Button>
        <Button className="m-3" onClick={this.decrement}>Decrement</Button>
        {/* <ErrorComponent></ErrorComponent> */}
      </div>
    )
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
    console.log("Component did update!")
  }

  componentWillUnmount(){
    console.log("Component Will UnMount!")
  }

  componentDidCatch(error: any, info: any){
    console.log("Component did catch");

    this.setState({error, info})
  }
}


