import React, { Component } from 'react';

export class MyComponent extends Component<any, any> {
    render(): React.ReactNode {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }}
