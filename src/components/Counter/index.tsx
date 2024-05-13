import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [incrementRecords, setIncrementRecords] = useState<number[]>([]);
  const [decrementRecords, setDecrementRecords] = useState<number[]>([]);

  const handleIncrement = () => {
    setCount((prevCount) => {
      setIncrementRecords([...incrementRecords, prevCount + 1]);
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => {
        setDecrementRecords([...decrementRecords, prevCount - 1]);
        return prevCount - 1;
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex gap-5 items-center">
        <button
          className="border py-3 px-5 border-gray-500 bg-black text-white"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <p>Count: {count}</p>
        <button
          className="border py-3 px-5 border-gray-500 bg-black text-white"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <div className="flex gap-6 border border-gray-700 rounded-md items-center justify-center">
        <div className="flex flex-col items-center">
          <p>Increment Records </p>
          <table>
            <thead>
              <tr>
                <th>Increment</th>
              </tr>
            </thead>
            <tbody>
              {incrementRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Decrement Records</p>
          <table>
            <thead>
              <tr>
                <th>Decrement</th>
              </tr>
            </thead>
            <tbody>
              {decrementRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Counter;
