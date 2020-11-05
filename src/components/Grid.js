import React from 'react'
import './Grid.css'

class Square extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sqrValue: ''
        }

        this.onHandleSquareChange = this.onHandleSquareChange.bind(this)
    }

    onHandleSquareChange = e => {
        let sqrValue = e.target.value

        if (!Number(sqrValue) && sqrValue != '' || sqrValue == '0' && sqrValue != '' ) {
            return;
        } else {
            this.setState({
                [e.target.name]: sqrValue
            })
            /*
            if (sqrValue <= 9) {
                this.setState({
                    [e.target.name]: sqrValue.charAt(0)
                })
            } else {
                this.setState({
                    [e.target.name]: sqrValue.charAt(1)
                })
            }
            */
        }
        
    }
    
    render() {
        return (
            <input type="text" className="square" name="sqrValue"
            value={this.state.sqrValue} 
            onChange={this.onHandleSquareChange}
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
