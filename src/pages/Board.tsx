import React from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Board: {id}</p>
    </div>
  );
};

export default Board;
