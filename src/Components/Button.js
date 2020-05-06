import React, { Component } from 'react';
import 'materialize-css';
import {Dropdown, NavItem} from "react-materialize";



class Button extends Component {
    render(){
        const {handleNumbers, handleOperators, handleResult, handleClear, handleBackSpace, history, handleHistoryRecall, handlePreAns} = this.props;
        const historyList = history.length ? 
        history.map(item=>{
            return (
                <NavItem key={history.indexOf(item)} onClick={handleHistoryRecall}>{item}</NavItem>
            )
        })
        : <NavItem>Nothing Yet</NavItem>;
        
        return (
            <div className="container">
                <div className="row">
                    <button className="col s3 btn" onClick={handleClear}>Clear All</button>
                    <button className="col s3 btn" onClick={handleBackSpace} >BackSpace</button>
                    <Dropdown trigger={
                        <button className="col s3 btn">History</button>
                    }>
                        <p>Call Back</p>
                        {historyList}
                    
                    </Dropdown>
                    <button className="col s3 btn" value="=" onClick={handleResult}>=</button>
               
                    <button className="col s3 btn" value="1" onClick={handleNumbers}>1</button>
                    <button className="col s3 btn" value="2" onClick={handleNumbers}>2</button>
                    <button className="col s3 btn" value="3" onClick={handleNumbers}>3</button>
                    <button className="col s3 btn" value="+" onClick={handleOperators}>+</button>
               
                    <button className="col s3 btn" value="4" onClick={handleNumbers}>4</button>
                    <button className="col s3 btn" value="5" onClick={handleNumbers}>5</button>
                    <button className="col s3 btn" value="6" onClick={handleNumbers}>6</button>
                    <button className="col s3 btn" value="-" onClick={handleOperators}>-</button>
                
                    <button className="col s3 btn" value="7" onClick={handleNumbers}>7</button>
                    <button className="col s3 btn" value="8" onClick={handleNumbers}>8</button>
                    <button className="col s3 btn" value="9" onClick={handleNumbers}>9</button>
                    <button className="col s3 btn" value="*" onClick={handleOperators}>x</button>
               
                    <button className="col s3 btn" value="0" onClick={handleNumbers}>0</button>
                    <button className="col s3 btn" onClick={handlePreAns}>PreAns</button>
                    <button className="col s3 btn" value="." onClick={handleOperators}>.</button>
                    <button className="col s3 btn" value="/" onClick={handleOperators}>/</button>
                </div>
            </div>
        );
    }
    
}

export default Button
