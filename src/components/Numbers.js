import React, { Component } from "react";

export default class Numbers extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    }
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event,value1,value2) {
        this.setState({ value: event.target.value1 });
        parseFloat(value1);
        this.setState({ value: event.target.value2 });
        parseFloat(value2);
        
    }


    render() {
        return (
            <div>
                <p>Первое число: <input type="number" value={this.state.value1} onChange={this.handleChange} /></p>
                <p>Второе число: <input type="number" value={this.state.value2} onChange={this.handleChange} /></p>
                <button name="plus" onClick={this.buttonPressed}>Сложить </button>
                <button name="minus" onClick={this.buttonPressed}>Вычесть </button>
                <button name="umnozhenie" onClick={this.buttonPressed}>Умножить </button>
                <button name="delenie" onClick={this.buttonPressed}>Делить </button>

            </div>
        );
    }

}
