
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      };
    }
    return {};
  };

  return (
    <div
      className={`px-2 py-1.5 flex-1 rounded-md text-center cursor-pointer ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};


export default CustomButton