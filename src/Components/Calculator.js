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
            result: null,
            history: [],
            preAns: null
        };
    }
    
    handleNumbers = (e) => {
        if(this.state.result != null || this.state.screen ==="21 digits in a number only mate"){
            this.setState({
                input: e.target.value,
                screen: e.target.value,
                preAns: this.state.result,
                result: null,
            })
        }
        else {
            //add numbers on screen
            let screen = this.state.screen !== "0" ? this.state.screen + e.target.value : e.target.value;
            let input = this.state.input !== 0 ? parseInt(this.state.input + e.target.value) : parseInt(e.target.value);
            
            //handle Max Digits Limit
            let maxDigitsLimit = /(\d){21}/g;
            if(maxDigitsLimit.test(this.state.screen)){
                this.setState({
                    screen: "21 digits in a number only mate"
                })
            }
            else {
                this.setState({
                    screen: screen,
                    input: input,
                })
            }
        } 
    }

    handleOperators = (e) => {
        if(this.state.result != null || this.state.screen ==="21 digits in a number only mate") {
            this.setState({
                screen: e.target.value,
                preAns: this.state.result,
                result: null
            })
        }
        else {
            //add operators on screen
            let screen = this.state.screen !== "0"? this.state.screen + e.target.value: e.target.value;
            this.setState({
                screen: screen,
            })
        }
    }

    handleResult = () => {
        //SE stand for Syntax Error
        //handle operators position SE
        let multiplyDivideAndPlusMinusSE = /(?<=[-+]*)([-+][*/])/g; // Syntax Error: -*, +*, -/, +/.
        let multiplyAndDivideSE = /[*/]{2,}/g; // Syntax Error: */ or /*.
        let operatorsForUnkNumSE = /([-+*/]{1,})$/g; // Syntax Error: 5-, 5-+, 5*-/,...And Syntax Error: +++, +-*, /*--,... (don't have any numbers input) 

        //handle the duplicate operators SE
        let plus = /[+]{2,}/g;
        let minus = /[-]{2,}/g;
        let evenMinus = /(?<=\d)(([-]{2}))(?=\d)/g;
        let oddMinus = /(?<=\d)(([-]{2})*[-])(?=\d)/g;

        //handle Decimal Dot Sign SE
        let decimalSE_1=/([.])([\d]*)([.])/g; // Syntax Error: 9.9.9, 3.44532.4324, 3.3.4.5532432,...
        let decimalSE_2=/([.]){2,}/g; // syntax Error: 8..3, 7.., 4....5, ..6,.... (2 or more dots linear)
        let decimalSE_3=/([.])$/g; //Syntax Error: 9., ., ...., ..,..... (end with .)
        let decimalSE_4=/([-+*/])([.])/g; // Syntax Error: *.*, +.++,...
        let decimalSE_5=/([.])([-+*/])/g; // Syntax Error: .*., .+..,...

        //handle Numbers SE
        let divideZeroSE = /(\d)([/])(0\d)/g; // Syntax Error: 9/00, 9/0321321, 4/0073213,...

        //catching Syntax Error
        if  (
               multiplyAndDivideSE.test(this.state.screen) 
            || multiplyDivideAndPlusMinusSE.test(this.state.screen) 
            || operatorsForUnkNumSE.test(this.state.screen)
            || decimalSE_1.test(this.state.screen)
            || decimalSE_2.test(this.state.screen)
            || decimalSE_3.test(this.state.screen)
            || decimalSE_4.test(this.state.screen)
            || decimalSE_5.test(this.state.screen)
            || divideZeroSE.test(this.state.screen)
            ) 
        {
            this.setState({
                screen: "Syntax Error Mate",
                result: 0,
            })
        }
        //handle: plus and minus sign being duplicate
        else if(plus.test(this.state.screen) || minus.test(this.state.screen)){
            let screen = this.state.screen;
            let handlePlus = screen.replace(screen.match(plus), "+");
            let handleEvenMinus = handlePlus.replace(screen.match(evenMinus), "+");
            let handleOddMinus = handleEvenMinus.replace(screen.match(oddMinus), "-");
            console.log(handleOddMinus);
            this.setState({
                result: eval(handleOddMinus),
                history: [...this.state.history,this.state.screen],
            });
        }
        else {
            this.setState({
                result: eval(this.state.screen),
                history: [...this.state.history,this.state.screen],
            });
        }
        
    }

    handleClear = () => {
        this.setState({
            input: 0,
            screen: "0",
            preAns: this.state.result,
            result: null
        })
    }

    handleBackSpace = () => {
        if(this.state.screen !== "Syntax Error Mate"){
            const backspace = this.state.screen;
            const screen = backspace.slice(0,backspace.length-1);
            if(screen == ""){
                this.setState({
                    screen: "0"
                })
            }
            else {
                this.setState({ 
                    screen: screen
                })
            }
        }
    }

    handleHistoryRecall = (e) => {
        this.setState({
            screen: e.target.text,
            preAns: this.state.result
        })
    }

    handlePreAns=(e)=>{
        this.setState({
            screen: this.state.preAns
        })
    }


    render(){
        return (
            <div className="calculator">
                <Screen result={this.state.result} screen={this.state.screen}/>
                <Output result={this.state.result} screen={this.state.screen}/>
                <Button 
                    handleNumbers={this.handleNumbers}
                    handleOperators={this.handleOperators}
                    handleResult={this.handleResult}
                    handleClear={this.handleClear}
                    handleBackSpace={this.handleBackSpace}
                    history={this.state.history}
                    handleHistoryRecall={this.handleHistoryRecall}
                    handlePreAns={this.handlePreAns}
                />
            </div>
        )
    }
    
}

export default Calculator
