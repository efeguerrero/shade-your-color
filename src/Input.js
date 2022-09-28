import React from 'react';

const Input = ({ actionSubmit, colorInput, inputChange, error }) => {
  return (
    <div className="inputContainer">
      <h1 className="inputTitle">Color Generator</h1>
      <form className="formContainer" onSubmit={actionSubmit}>
        <input
          type="text"
          name="color"
          placeholder="#FFFFFF"
          className="inputBox"
          value={colorInput}
          onChange={(e) => inputChange(e)}
        />
        <button className="inputBtn" type="submit">
          Submit
        </button>
      </form>
      {error ? <h2 className="errorMsg">Use a valid HEX code!</h2> : <></>}
    </div>
  );
};

export default Input;
