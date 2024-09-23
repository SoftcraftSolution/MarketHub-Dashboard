import React, { useRef } from 'react';
import './verifyuser.css'; // Import external CSS
import dateIcon from '../../assets/date.png'; // Path to your date icon image

function CustomDatePicker({ onChange }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="date-picker" onClick={handleClick}>
      <input
        type="date"
        className="hidden-input"
        ref={inputRef}
        onChange={handleChange}
      />
      <img src={dateIcon} alt="Select Date" className="date-icon" />
    </div>
  );
}

export default CustomDatePicker;
