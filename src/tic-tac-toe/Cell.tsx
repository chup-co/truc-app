import React from 'react';

interface CellProps {
  value: string | number;
  onClick: () => void;
  className?: string;
}

const Cell: React.FC<CellProps> = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
