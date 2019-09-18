import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Res from "./components/Res";
class App extends Component {
    state = {
        result: ''
    };
    buttonPressed(buttonName, value1, value2) {
        if (buttonName === 'plus') {
            let numeral1 = parseInt(value1);
            let numeral2 = parseInt(value2);
            var result = parseInt(numeral1 + numeral2);
            document.getElementById("otvet").innerHTML = result;

        } else if (buttonName === 'minus') {
            let numeral1 = parseInt(value1);
            let numeral2 = parseInt(value2);
            var result = parseInt(numeral1 - numeral2);
            document.getElementById("otvet").innerHTML = result;

        } else if (buttonName === 'umnozhenie') {
            let numeral1 = parseInt(value1);
            let numeral2 = parseInt(value2);
            var result = parseInt(numeral1 * numeral2);
            document.getElementById("otvet").innerHTML = result;

        } else if (buttonName === 'delenie') {
            let numeral1 = parseInt(value1);
            let numeral2 = parseInt(value2);
            var result = parseInt(numeral1 / numeral2);
            document.getElementById("otvet").innerHTML = result;

        }
        return (result);
    }
    render() {
        return (
            <div className="App">
                <Numbers buttonPressed={this.buttonPressed} />
                <Res id='otvet' result={this.state.result} />
            </div>
        )
    }
}
export default App;