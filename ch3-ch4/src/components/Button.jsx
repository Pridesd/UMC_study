import React from "react";

function Button({ children, fontSize, width }) {
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
        width: width ? width : "auto",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
