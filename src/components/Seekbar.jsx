import React from 'react';
import { passwordStrength } from 'check-password-strength';

function Seekbar({ password }) {
  const passwordStrengthData = passwordStrength(password);
  const { id, value } = passwordStrengthData;
  let width1 = 0; // Declare width variable outside the getColor function

  const getColor = () => {
    switch (id) {
      case 0:
        return 'red'; // Weak
      case 1:
        return 'orange'; // Fair
      case 2:
        return 'yellow'; // Good
      case 3:
        return 'green'; // Strong
      default:
        return 'transparent';
    }
  };

  const progressBarStyle = {
    width: `${(id + 1) * 25}%`,
    backgroundColor: getColor(),
    height: '5px',
    borderRadius: '4px',
    transition: 'width 0.3s',
    boxShadow: `0 0 30px ${getColor()} , 0 0 5px ${getColor()}, 0 0 10px ${getColor()}`
  };
  

  return (
    <div>
      <div className='text-white font-semibold font-serif' style={{ marginBottom: '10px' }}>
        <strong>Password Strength: </strong>
        <span className='underline'
        style={{ color: getColor() }}>{value}</span>
      </div>
      <div style={progressBarStyle}></div>
    </div>
  );
}

export default Seekbar;
