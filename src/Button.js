import React, { Component } from 'react'

class Button extends Component {
    render(){
        const {handleNumbers, handleOperators, handleResult, handleClear, handlePreAns} = this.props;
        return (
            <div>
                <button value="0" onClick={handleNumbers}>0</button>
                <button value="1" onClick={handleNumbers}>1</button>
                <button value="2" onClick={handleNumbers}>2</button>
                <button value="3" onClick={handleNumbers}>3</button>
                <button value="4" onClick={handleNumbers}>4</button>
                <button value="5" onClick={handleNumbers}>5</button>
                <button value="6" onClick={handleNumbers}>6</button>
                <button value="7" onClick={handleNumbers}>7</button>
                <button value="8" onClick={handleNumbers}>8</button>
                <button value="9" onClick={handleNumbers}>9</button>
                <button value="+" onClick={handleOperators}>+</button>
                <button value="-" onClick={handleOperators}>-</button>
                <button value="*" onClick={handleOperators}>x</button>
                <button value="/" onClick={handleOperators}>/</button>
                <button value="=" onClick={handleResult}>=</button>
                <button value="clear" onClick={handleClear}>Clear</button>
                <button value="preAns" onClick={handlePreAns}>PreAns</button>
            </div>
        );
    }
    
}

export default Button
