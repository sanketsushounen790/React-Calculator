import React, { Component } from 'react'

class Screen extends Component {
    render(){
        let {screen, result} = this.props;
        if(result == "Infinity"){
            screen = "Math Error Mate";
        }
        return (
            <div className="container red">
                {screen}
            </div>
        )
    }
    
}

export default Screen
