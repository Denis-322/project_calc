import React, { Component } from "react";

export default class Numbers extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return (
            <div>
                <p>Первое число: <input type="number" id="nm1" /></p>
                <p>Второе число: <input type="number" id="nm2" /></p>
                <button name="plus" onClick={this.buttonPressed}>Сложить </button>
                <button name="minus" onClick={this.buttonPressed}>Вычесть </button>
                <button name="umnozhenie" onClick={this.buttonPressed}>Умножить </button>
                <button name="delenie" onClick={this.buttonPressed}>Делить </button>
                
            </div>
        );
    }
}