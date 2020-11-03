import React from 'react'

function Square(props) {
    return (
        <input type="number" min="1" max="9" className="square">

        </input>
    );
}

class Grid extends React.Component {
    renderSquare(i) {
        return(
            <Square
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
         var self = this;
        return (
            <div>
                {[...Array(9)].map(function(row, rowId) {
                    return (
                        <div className="grid-row" key={rowId}>
                            {
                                [...Array(9)].map((col, colId) => {
                                    return self.renderSquare((3 * rowId) + colId);
                                })
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Grid;
