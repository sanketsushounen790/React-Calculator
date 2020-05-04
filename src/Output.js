import React, { Component } from 'react'


class Output extends Component {
    render(){
        const {result} = this.props;
        return (
            <div>
                {result}
            </div>
        )
    }
    
}

export default Output
