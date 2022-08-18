import { Component } from "react";
import "./App.css";
import { Counter } from "./Counter";
import Button from "react-bootstrap/Button"


export class App extends Component<any, any> {
    mountCounter: () => void;
    unMountCounter: () => void;
    ignoreProp: () => void;
    seedGenerator: () => void;
    constructor(props: any){
        super(props)
        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 40
        }

        this.mountCounter = () => this.setState({mount: true})

        this.unMountCounter = () => this.setState({mount: false})

        this.ignoreProp = () => this.setState({ignoreProp: Math.random()})

        this.seedGenerator = () => this.setState({seed: Math.random()*100})
    }
    render(){
        return(
            <div>
                {this.state.mount ? <Counter ignore={this.state.ignoreProp} seed={this.state.seed}></Counter> : null}
                <Button variant="info" className="m-3" onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</Button>
                <Button className="m-3" onClick={this.ignoreProp}>Ignore Prop</Button>
                <Button variant="danger" className="m-3" onClick={this.unMountCounter} disabled={!this.state.mount}>UnMount Counter</Button>
                <Button onClick={this.seedGenerator} className="m-3" >Generate Seed</Button>
            </div>
        )
    }
}