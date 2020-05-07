import React, { Component } from 'react'


class Output extends Component {
    render(){
        let {result, screen} = this.props;
        if(result == "Infinity"){
            screen = "Math Error Mate";
            result = null;
        }
        return (
            <div className="container right-align output">
                <span>{screen !== "Syntax Error Mate" || screen === "Math Error Mate" ? result : null}</span>
            </div>
        )
    }
    
}

export default Output
