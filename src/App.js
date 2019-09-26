import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Res from "./components/Res";
class App extends Component {
    
    
        state = { result:'' };
        
    buttonPressed(buttonName, value1, value2) {
        
        if (buttonName === 'plus') {
            console.log( value1, value2);
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 + numeral2);
            console.log( result);
            return (result)
            

        } else if (buttonName === 'minus') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 - numeral2);
            console.log( result);
            return (result)

        } else if (buttonName === 'umnozhenie') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 * numeral2);
            console.log( result);
            return (result)

        } else if (buttonName === 'delenie') {
            let numeral1 = parseFloat(value1);
            let numeral2 = parseFloat(value2);
            let result = parseFloat(numeral1 / numeral2);
            console.log( result);
            return (result)
        }
        
    }
    render(result) {console.log(result)
        return (
            <div className="App">
                <Numbers buttonPressed={this.buttonPressed} />
                <Res result={this.state.result} />
            </div>
        )
    }
}
export default App;