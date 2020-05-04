import React, { Component } from 'react';
import Button from "./Button";
import Screen from "./Screen";
import Output from "./Output";


class Calculator extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            currentVal: 0,
            preVal: 0,
            screen: "0",
            result: 0,
            currentSign: "",
            preSign: ""
        };
    }
    /* maxDigitWarning = () => {
        this.setState({
            currentVal: "Digt Limit , 21 Digit Max Mate",
            prevVal: this.state.currentVal
        });
        setTimeout(()=>
            this.setState({
                currentVal: this.state.prevVal
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
        switch(x){
            case "+":
                this.setState({
                    currentSign: "plus",
                    currentVal: parseInt(this.state.currentVal) + parseInt(this.state.input),
                    input: 0,
                })
            break;
            case "-":
                this.setState({
                    currentSign: "minus",
                    currentVal: this.state.currentVal == 0 ? 
                    parseInt(this.state.input):
                    parseInt(this.state.currentVal) - parseInt(this.state.input),
                    input: 0,
                })
            break;
            case "*":
                this.setState({
                    currentSign: "multiply",
                    currentVal: this.state.currentVal == 0 ? 
                    1 * parseInt(this.state.input) : 
                    parseInt(this.state.currentVal) * parseInt(this.state.input),
                    input: 0,
                })
            break;
            case "/":
                this.setState({
                    currentSign: "divide",
                    currentVal: this.state.currentVal == 0 ? 
                    parseInt(this.state.input) :
                    parseInt(this.state.currentVal) / parseInt(this.state.input),
                    input: 0,
                })
            break;
            
            default: 
            break;
        }
            
            
            
        
        
        /* else clearAll */
        
    }

    handleResult = () => {
        switch(this.state.currentSign){
            case "plus":
                this.setState({
                    result: parseInt(this.state.currentVal) + parseInt(this.state.input),
                })
            break;
            case "minus":
                this.setState({
                    result: parseInt(this.state.currentVal) - parseInt(this.state.input),
                })
            break;
            case "multiply":
                this.setState({
                    result: parseInt(this.state.currentVal) * parseInt(this.state.input),
                })
            break;
            case "divide":
                this.setState({
                    result: this.state.input != 0 ? 
                    parseInt(this.state.currentVal) / parseInt(this.state.input) :
                    "Math Error"
                })
            break;
            default:
            break;
        }
        
        
    }

    handleClear = () => {
        this.setState({
            screen: "0",
            input: 0,
            currentVal: 0,
            preVal: this.state.result,
            result: 0
        })
    }

    handlePreAns = () => {
        this.setState({
            screen: this.state.preVal,
            currentVal: parseInt(this.state.preVal)
        })
    }

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
