import React from "react";

const Button = ({ onClick, color, text }) => {
  return (
    <button
      style={{
        background: `linear-gradient(90deg, ${color}, #ffffff40, ${color})`,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
