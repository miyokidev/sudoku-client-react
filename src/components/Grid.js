import React from 'react'
import './Grid.css'

function Square(props) {
    return (
        <input type="text" className="square">

        </input>
    );
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
