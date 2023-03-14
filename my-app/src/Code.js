import React from "react";

export default class Components extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            input1: 0,
            input2: 0,
            submit: 0,
            result: ""

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

    checkResult = () => {

        this.state.submit = (this.state.input2 / (this.state.input1 * 0.01 * this.state.input1 * 0.01)).toFixed(2)

        let arr = ["Выраженный дефицит массы тела", "Недостаточная масса тела",
            "Норма", "Избыточная масса тела", "Ожирение первой степени", "Ожирение второй степени",
            "Ожирение третьей степени"
        ];

        if (this.state.submit <= 15.99) {

            this.setState({ result: arr[0] })

        }
        else if (this.state.submit >= 16 && this.state.submit <= 18.49) {

            this.setState({ result: arr[1] })

        }
        else if (this.state.submit >= 18.50 && this.state.submit <= 24.99) {

            this.setState({ result: arr[2] })

        }
        else if (this.state.submit >= 25 && this.state.submit <= 29.99) {

            this.setState({ result: arr[3] })

        }
        else if (this.state.submit >= 30 && this.state.submit <= 34.99) {

            this.setState({ result: arr[4] })

        }
        else if (this.state.submit >= 35 && this.state.submit <= 39.99) {

            this.setState({ result: arr[5] })

        }
        else if (this.state.submit >= 40) {

            this.setState({ result: arr[6] })

        }
    }

    render() {

        return (

            <div className="forText">

                <p>Укажите ваш рост: <input type="range" min={"1"} max={"300"} step={"0.1"} onChange={this.handleChange1} /></p>

                <p>{this.state.input1}</p>

                <p>Укажите ваш вес: <input type="range" min={"1"} max={"300"} step={"0.1"} onChange={this.handleChange2} /></p>

                <p>{this.state.input2}</p>

                <button onClick={this.checkResult}>Рассчитать ИМТ</button>

                <p>{this.state.result}</p>

                <p>Результат:</p>

                <p>{this.state.submit} кг/м<sup>2</sup></p>

            </div>

        )

    }
}