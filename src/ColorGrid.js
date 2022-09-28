import React from 'react';
import Color from './Color';

const ColorGrid = ({ colorList }) => {
  return (
    <>
      <div className="gridContainer">
        {colorList.map((color, index) => {
          return <Color data={color} key={index} />;
        })}
      </div>
    </>
  );
};

export default ColorGrid;
