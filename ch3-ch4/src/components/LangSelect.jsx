import React from "react";

function LangSelect() {
  return (
    <select
      style={{
        border: "0.5px solid",
        borderColor: "#ffffff83",
        borderRadius: "5px",
        width: "140px",
        background: "rgba(0, 0, 0, 0.3)",
        fontSize: "1.125rem",
        padding: "0.25rem 1.25rem",
        color: "#FFF",
      }}
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LangSelect;
