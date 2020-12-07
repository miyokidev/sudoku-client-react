import React from 'react'
import './Grid.css'

class Square extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sqrValue: '',
            regexp: /^[1-9]+$/
        }

        this.onHandleSquareChange = this.onHandleSquareChange.bind(this)
        this.onHandleSquareKeyPress = this.onHandleSquareKeyPress.bind(this)
    }

    onHandleSquareKeyPress = e => {
        let newSqrValue = e.key

        if (newSqrValue === '' || this.state.regexp.test(newSqrValue)) {
            this.setState( { [e.target.name]: newSqrValue})
        }
    }

    onHandleSquareChange = e => {
        let sqrValue = e.target.value

        if (sqrValue === '') {
            this.setState( { [e.target.name]: sqrValue})
        }
    }
    
    render() {
        return (
            <input type="number" inputMode="numeric" name="sqrValue" maxLength="1"
            tabIndex="0" autoComplete="off" size="1" pattern="[0-9]*" min="1" max="9"
            className={this.props.attribute}
            value={this.state.sqrValue} 
            onChange={this.onHandleSquareChange}
            onKeyPress={this.onHandleSquareKeyPress}
            />
        );
    }
}

class Grid extends React.Component {
    renderSquare(attribute) {
        console.log(attribute);
        return(
            <Square attribute={attribute}/>
        );
    }
    
    render() {
        return (
            <div className="sudoku-grid">
                <table className="sudoku">
                    <tbody>
                    {[...Array(9)].map((value,indexi) => {
                    return (
                        <tr>
                            {[...Array(9)].map((value,indexj) => {
                                if ((indexi+1) % 3 === 0 && indexi+1 !== 9 && (indexj+1) % 3 === 0 && indexj+1 !== 9) {
                                    return <td className="square">{this.renderSquare("bottom side")}</td>
                                } else if ((indexi+1) % 3 === 0 && indexi+1 !== 9) {
                                    return <td className="square">{this.renderSquare("bottom")}</td>
                                } else if ((indexj+1) % 3 === 0 && indexj+1 !== 9) {
                                    return <td className="square">{this.renderSquare("side")}</td>
                                }

                                return <td className="square">{this.renderSquare("")}</td>
                            })}
                        </tr>
                    );
                })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Grid;
