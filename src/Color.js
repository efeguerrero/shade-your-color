import React, { useEffect, useState } from 'react';
import Values from 'values.js';

const Color = ({ data }) => {
  const [copyAlert, setCopyAlert] = useState(false);

  const copyAction = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopyAlert(true);
  };

  useEffect(() => {
    setTimeout(() => setCopyAlert(false), 2000);
  }, [copyAlert]);

  //deconstruct rgb array to use each variable later for styling
  const [r, g, b] = data.rgb;
  const weight = data.weight;
  //We reconstruct each color to be able to later extrar hex String and type of shade/tint with library functions
  const rgbString = new Values(`rgb(${r},${g},${b})`);
  const hex = rgbString.hexString();
  const colorType = data.type;

  //Text on colorbox bases its color depending on darkness of background

  let gradientTextStyle =
    colorType === 'tint'
      ? (gradientTextStyle = 'darkText')
      : (gradientTextStyle = 'lightText');

  return (
    <>
      <div
        className={`colorBox ${gradientTextStyle}`}
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
        onClick={() => copyAction(hex)}
      >
        <h2 className="colorHex">{weight}%</h2>
        <h2 className="colorGradient">{hex}</h2>
        {copyAlert ? (
          <h3 className="copyAlert gradientTextStyle">Copied to clipboard</h3>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Color;
