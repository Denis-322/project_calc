import React, { Component } from "react";

export default class Numbers extends Component {
    constructor(state) {
        super(state);
        this.state = { value1: '', value2: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name, this.state.value1, this.state.value2)
    }
    handleChange(event, ) {
        this.setState({ value1: event.target.value });
    }
    handleChange2(event, ) {

        this.setState({ value2: event.target.value });

    }
    render() {
        return (
            <div>
                <p>Первое число: <input type="number" value={this.state.value1} onChange={this.handleChange} /></p>
                <p>Второе число: <input type="number" value={this.state.value2} onChange={this.handleChange2} /></p>
                <button name="plus" onClick={this.buttonPressed}>Сложить </button>
                <button name="minus" onClick={this.buttonPressed}>Вычесть </button>
                <button name="umnozhenie" onClick={this.buttonPressed}>Умножить </button>
                <button name="delenie" onClick={this.buttonPressed}>Делить </button>

            </div>
        );
    }
}