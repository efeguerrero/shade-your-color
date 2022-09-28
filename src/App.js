import React, { useEffect, useState } from 'react';
import Input from './Input';
import ColorGrid from './ColorGrid';
import Values from 'values.js';

function App() {
  const defaultColor = '#8bd3dd';
  const [colorInput, setColorInput] = useState('');
  const [colorList, setColorList] = useState(new Values(defaultColor).all(10));
  const [error, setError] = useState(false);

  const actionSubmit = (e) => {
    e.preventDefault();
    try {
      let color = new Values(colorInput);
      setColorList(color.all(10));
    } catch (error) {
      setError(true);
    }
  };

  const inputChange = (e) => {
    setColorInput(e.target.value);
    setError(false);
  };

  useEffect(() => {
    setTimeout(() => setError(false), 5000);
  }, [error]);

  return (
    <>
      <div className="mainContainer">
        <Input
          actionSubmit={actionSubmit}
          colorInput={colorInput}
          inputChange={inputChange}
          error={error}
        />
        <ColorGrid colorList={colorList} />
      </div>
    </>
  );
}

export default App;
