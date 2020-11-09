import React from 'react'
import './Grid.css'

class Square extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sqrValue: '',
            regexp: /^[1-9\b]+$/
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
            <input type="text" className="square" name="sqrValue" maxLength="1"
            value={this.state.sqrValue} 
            onChange={this.onHandleSquareChange}
            onKeyPress={this.onHandleSquareKeyPress}
            />
        );
    }
}

class Grid extends React.Component {
    renderSquare(i) {
        return(
            <Square/>
        );
    }
    
    render() {
        return (
            <div className="grid">
                {[...Array(9)].map(i => {
                    return (
                        <div className="grid-row">
                            {[...Array(9)].map(j => {
                                return this.renderSquare(3*i + j)
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Grid;
