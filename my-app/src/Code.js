import React, { Component } from "react";

export default class Ccomponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            input1: "",
            input2: ""
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



    render() {
        return (
            <div>

                <p>Укажите ваш рост: <input id = "r1" type = "range" min={"1"} max = {"300"} step = {"1"} onChange={this.handleChange1} /></p>
                <p>{this.state.input1}</p>

                <p>Укажите ваш рост: <input type = "range" min={"1"} max = {"300"} step = {"1"} onChange={this.handleChange2} /></p>
                <p>{this.state.input2}</p>


            </div>
        )

    }
}