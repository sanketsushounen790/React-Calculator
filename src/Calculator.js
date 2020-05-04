import React, { Component } from 'react';
import Button from "./Button";
import Screen from "./Screen";
import Output from "./Output";


class Calculator extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            screen: "0",
            result: 0,
        };
    }
    /* maxDigitWarning = () => {
        this.setState({
            currentResult: "Digt Limit , 21 Digit Max Mate",
            prevVal: this.state.currentResult
        });
        setTimeout(()=>
            this.setState({
                currentResult: this.state.prevVal
            }), 1000
        );
    } */

    handleNumbers = (e) => {
        //add numbers on screen
        let x = this.state.screen !== "0" ? this.state.screen + e.target.value : e.target.value;
        let y = this.state.input !== 0 ? parseInt(this.state.input + e.target.value) : parseInt(e.target.value);
        this.setState({
            screen: x,
            input: y,
        })
    }

    handleOperators = (e) => {
        //add operators on screen
        let x = e.target.value;
        
        let y = this.state.screen + x;
        this.setState({
            screen: y,
            
        })
        /* else clearAll */
    }

    handleResult = () => {
      this.setState({
          result: eval(this.state.screen)
      })
    }

    handleClear = () => {
        this.setState({
            input: 0,
            currentResult: 0,
            preResult: 0,
            currentVal: 0,
            preVal: 0,
            screen: "0",
            result: 0,
            currentSign: "",
            preSign: ""
        })
    }

    /* handlePreAns = () => {
        this.setState({
            screen: this.state.preResult,
            currentResult: parseInt(this.state.preResult)
        })
    } */

    handleDecimal = () => {

    }

    



    render(){
        return (
            <div>
                <Screen screen={this.state.screen}/>
                <Output result={this.state.result}/>
                <Button 
                    handleNumbers={this.handleNumbers}
                    handleOperators={this.handleOperators}
                    handleResult={this.handleResult}
                    handleClear={this.handleClear}
                    handlePreAns={this.handlePreAns}
                />
            </div>
        )
    }
    
}

export default Calculator
