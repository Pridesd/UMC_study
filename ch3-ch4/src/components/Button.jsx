import React from "react";

function Button({ children, fontSize }) {
  return (
    <button
      style={{
        backgroundColor: "#E50914",
        border: "none",
        borderRadius: "5px",
        color: "#FFF",
        fontSize: fontSize,
        padding: "0.725rem 1rem",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
