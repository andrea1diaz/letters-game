import React, { useState, useEffect } from 'react';

import './Board.css';

const Tile = (props) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.selected === undefined) {
            setSelected(false);
        }
    })

    return (
        <div
            className={`tile item ${selected ? 'active' : ''}`}
            style={{cursor: `${props.isNeighbor && !selected ? 'pointer' : 'unset'}`}}
            key={props.index}
            onClick={() => {
                if (props.isNeighbor && !selected) {
                    setSelected(true);
                    props.onClick(props.index);
                }
            }}
        >
            <p>{props.value}</p>
        </div>
    )
};

const Board = (props) => {
    const isNeighbor = (index) => {
        if (props.selected === undefined) return true;

        var from_x = Math.floor(props.selected / props.col);
        var from_y = props.selected % props.col;
        var to_x = Math.floor(index/ props.col);
        var to_y = index % props.col;

        if ((from_x - 1 <= to_x && to_x <= from_x + 1) && (from_y - 1 <= to_y && to_y <= from_y + 1)) {
            return true;
        }

        return false;
    }

    return (
        <div className="board-container" style={{maxWidth: `${(78 + 10) * props.col}px`}}>
            { props.data.map((value, index) => {
                return (
                    <Tile
                        value={value}
                        isNeighbor={isNeighbor(index)}
                        key={index}
                        index={index}
                        onClick={() => props.handleClick(index)}
                        selected={props.selected}
                    />
                )
            })}

        </div>
    );
}

export default Board;