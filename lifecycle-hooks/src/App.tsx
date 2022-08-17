import { Component } from "react";
import "./App.css";
import { Counter } from "./Counter";
import Button from "react-bootstrap/Button"


export class App extends Component<any, any> {
    mountCounter: () => void;
    unMountCounter: () => void;
    constructor(props: any){
        super(props)
        this.state = {
            mount: true,
        }

        this.mountCounter = () => this.setState({mount: true})

        this.unMountCounter = () => this.setState({mount: false})
    }
    render(){
        return(
            <div>
                {this.state.mount ? <Counter></Counter> : null}
                <Button variant="info" className="m-3" onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</Button>
                <Button variant="danger" className="m-3" onClick={this.unMountCounter} disabled={!this.state.mount}>UnMount Counter</Button>
            </div>
        )
    }
}