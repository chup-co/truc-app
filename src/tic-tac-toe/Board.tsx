import React from 'react';
import Cell from './Cell'; 

interface BoardProps {
  cells: (string | number)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === 'X' ? 'is-x' : item === 0 ? 'is-o' : ''}
        />
      ))}
    </div>
  );
};

export default Board;
