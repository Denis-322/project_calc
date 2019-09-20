import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Res from "./components/Res";
class App extends Component {
    state = {
        result: ''
    };
    buttonPressed(buttonName, value, value2) {
        console.log(buttonName, value, value2);
        if (buttonName === 'plus') {
            let numeral1 = this.state.value;
            let numeral2 = this.state.value2;
            let result = parseFloat(numeral1 + numeral2);
            return (result)

        } else if (buttonName === 'minus') {
            let numeral1 = parseFloat(value);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 - numeral2);
            return (result)

        } else if (buttonName === 'umnozhenie') {
            let numeral1 = parseFloat(value);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 * numeral2);
            return (result)

        } else if (buttonName === 'delenie') {
            let numeral1 = parseFloat(value);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 / numeral2);
            return (result)
        }
        
    }
    render() {
        return (
            <div className="App">
                <Numbers buttonPressed={this.buttonPressed} />
                <Res result={this.state.result} />
            </div>
        )
    }
}
export default App;