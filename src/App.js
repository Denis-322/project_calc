import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Res from "./components/Res";
class App extends Component {
    state = {
        result:''
    };
    buttonPressed(buttonName) {
        if (buttonName === 'plus') {
            let num1 = document.getElementById("nm1").value;
            num1 = parseInt(num1);
            let num2 = document.getElementById("nm2").value;
            num2 = parseInt(num2);
            var result = num1 + num2;
            document.getElementById("otvet").innerHTML = result;
            
        } else if (buttonName === 'minus') 
        { let num1 = document.getElementById("nm1").value;
            num1 = parseInt(num1);
            let num2 = document.getElementById("nm2").value;
            num2 = parseInt(num2);
            var result = num1 - num2;
            document.getElementById("otvet").innerHTML = result;
        
        } else if (buttonName === 'umnozhenie') 
        { let num1 = document.getElementById("nm1").value;
            num1 = parseInt(num1);
            let num2 = document.getElementById("nm2").value;
            num2 = parseInt(num2);
            var result = num1 * num2;
            document.getElementById("otvet").innerHTML = result;
        
        } else if (buttonName === 'delenie') 
        { let num1 = document.getElementById("nm1").value;
            num1 = parseInt(num1);
            let num2 = document.getElementById("nm2").value;
            num2 = parseInt(num2);
            var result = num1 / num2;
            document.getElementById("otvet").innerHTML = result;
        
        }
        return result;
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