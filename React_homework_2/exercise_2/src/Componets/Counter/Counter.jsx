import "./Counter.css";

import React from "react";


class  Counter  extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        }
    }

    incrementByOne = () => {

        this.setState ({

            counter: this.state.counter + 1

        })

    }

    decrementByOne = () => {

        this.setState ({

            counter: this.state.counter - 1
        })

        if(this.state.counter === 0) {

            this.setState ({
                counter: this.state.counter = 0
            })
        }
    }

    resetToZero = () => {

        this.setState ({
            
            counter: this.state.counter = 0
        })
       
    }

    changeCounterToInput = (event) => {

        let inputValue = parseInt(event.target.value);
        
        if(inputValue >= 0) {

            this.setState ({
                counter: inputValue
            })
        }
    }


    render() {

        return (

            <div className="counter-container">
                <p>{this.state.counter}</p>
                <span>{this.state.counter % 2 === 0 ? "Even" : "Odd"}</span>
                <button onClick={this.incrementByOne}>Increment</button>
                <button onClick={this.decrementByOne}>Decrement</button>
                <button onClick={this.resetToZero}>Reset</button>
                <label htmlFor="input"></label>
                <input id="input" type="number" onChange={this.changeCounterToInput} />
            </div>
        )
    }
}



export default Counter;