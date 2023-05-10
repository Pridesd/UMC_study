import React from "react";

function Button({
  children,
  fontSize,
  width,
  color,
  backgroundColor,
  onCilckE,
}) {
  return (
    <button
      onClick={onCilckE}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#E50914",
        border: "none",
        borderRadius: "5px",
        color: color ? color : "#FFF",
        fontSize: fontSize,
        padding: "0.725rem 1rem",
        cursor: "pointer",
        width: width ? width : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
