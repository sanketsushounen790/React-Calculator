import React, { Component } from 'react'


class Output extends Component {
    render(){
        let {result, screen} = this.props;
        if(result == "Infinity"){
            screen = "Math Error Mate";
            result = null;
        }
        return (
            <div className="container red right-align">
                {screen !== "Syntax Error Mate" || screen === "Math Error Mate" ? result : null}
            </div>
        )
    }
    
}

export default Output
