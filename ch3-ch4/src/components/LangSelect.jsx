import React from "react";
import styled from "styled-components";
const Select = styled.select`
  border: 0.5px solid;
  border-color: #ffffff83;
  border-radius: 5px;
  width: 140px;
  background: rgba(0, 0, 0, 0.3);
  font-size: 1.125rem;
  padding: 0.25rem 1.25rem;
  color: #fff;
  @media screen and (max-width: 426px) {
    font-size: 0.725rem;
    width: 80px;
    padding: 0.25rem 0.725rem;
  }
`;
function LangSelect() {
  return (
    <Select>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </Select>
  );
}

export default LangSelect;
