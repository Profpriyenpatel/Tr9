import React, { useState } from 'react';
function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);

  const handleAddition = () => {
    const sum = num1 + num2;
    setAddResult(sum);
  };
  const handleSubtraction = () => {
    const difference = num1 - num2;
    setSubResult(difference);
  };
  return (
    <div>
      <h2>Addition and Subtraction</h2>
      <div>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) =>
setNum1(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) =>
setNum2(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
      </div>
      <div>
        <p>Result of Addition: {addResult}</p>
        <p>Result of Subtraction: {subResult}</p>
      </div>
    </div>
  );
};
export default Calc; 
