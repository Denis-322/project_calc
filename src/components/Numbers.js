import React, { Component } from "react";

export default class Numbers extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    }
    constructor(props) {
        super(props);
        this.state ={ value: '' };
    }
    

render() {
    return (
        <div>
            <p>Первое число: <input type="number" value1={this.state.value1} /></p>
            <p>Второе число: <input type="number" value2={this.state.value2} /></p>
            <button name="plus" onClick={this.buttonPressed}>Сложить </button>
            <button name="minus" onClick={this.buttonPressed}>Вычесть </button>
            <button name="umnozhenie" onClick={this.buttonPressed}>Умножить </button>
            <button name="delenie" onClick={this.buttonPressed}>Делить </button>

        </div>
    );
}
}
