import React from 'react'

const InputBox = ({ name, icon, type, placeholder, value, onChange }) => {
    return (
      <div className="inputBox">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <img src={icon} alt="" />
      </div>
    );
  };

export default InputBox
