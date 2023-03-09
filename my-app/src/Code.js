import React, { Component } from "react";

export default class Ccomponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            input1: "",
            input2: "",
            submit: ""
        };

    }

    handleChange1 = (event) => {

        this.setState({

            input1: event.target.value

        });

    }

    handleChange2 = (event) => {

        this.setState({

            input2: event.target.value

        });

    }

    handleClick = () => {

        this.setState({
            submit: (this.state.input2/(this.state.input1 * 0.01 * this.state.input1 * 0.01)).toFixed(2)
        });

    }


    render() {

        return (

            <div>

                <p>Укажите ваш рост: <input type="range" min={"1"} max={"250"} step={"1"} onChange={this.handleChange1} /></p>

                <p><input type = "text" value={this.state.input1}></input></p>

                <p>Укажите ваш вес: <input type="range" min={"1"} max={"150"} step={"1"} onChange={this.handleChange2} /></p>
                <p>{this.state.input2}</p>

                <button onClick={ this.handleClick}>Рассчитать ИМТ</button>

                <p>{this.state.submit}</p>


            </div>


        )

    }
}