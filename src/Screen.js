import React, { Component } from 'react'

class Screen extends Component {
    render(){
        const {screen} = this.props;
        return (
            <div>
                {screen}
            </div>
        )
    }
    
}

export default Screen
