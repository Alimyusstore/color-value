import React from 'react'

const Button = ({ setTextChange, textChange }) => {
  return (
    <div className="w-[300px] bg-blue-500 text-white hover:bg-blue-300 hover:text-black transition-all p-2 rounded-md">
      <button
        onClick={() => setTextChange(!textChange)}
      >
        Change Text Color
      </button>
    </div>
  );
};

export default Button
