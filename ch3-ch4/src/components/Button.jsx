import React from "react";

function Button({ children, fontSize, width, color, backgroundColor }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#E50914",
        border: "none",
        borderRadius: "5px",
        color: color ? color : "#FFF",
        fontSize: fontSize,
        padding: "0.725rem 1rem",
        cursor: "pointer",
        width: width ? width : "auto",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
