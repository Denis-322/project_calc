import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Res from "./components/Res";
class App extends Component {
    state = {
        result: ''
    };
    buttonPressed(buttonName, value1, value2) {
        if (buttonName === 'plus') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result1 = parseFloat(numeral1 + numeral2);
            return (result1)

        } else if (buttonName === 'minus') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result1 = parseFloat(numeral1 - numeral2);
            return (result1)

        } else if (buttonName === 'umnozhenie') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result1 = parseFloat(numeral1 * numeral2);
            return (result1)

        } else if (buttonName === 'delenie') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result1 = parseFloat(numeral1 / numeral2);
            return (result1)
        }
        
    }
    render() {
        return (
            <div className="App">
                <Numbers buttonPressed={this.buttonPressed} />
                <Res result={this.state.result1} />
            </div>
        )
    }
}
export default App;