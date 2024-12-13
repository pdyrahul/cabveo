import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ label, backgroundColor, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button
    style={{ backgroundColor: backgroundColor, color: color }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;