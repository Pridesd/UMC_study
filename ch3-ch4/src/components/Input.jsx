import React from "react";
import styled from "styled-components";
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  label {
    position: absolute;
    left: 1rem;
    top: 20%;
    font-size: 1.25rem;
    opacity: 0.6;
    transition: all 0.2s ease-in-out;
  }
  input {
    background: none;
    outline: none;
    color: #fff;
    font-size: 1.25rem;
    padding: 1.5rem 1rem;
    padding-bottom: 0.5rem;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  input:focus + label {
    font-size: 0.75rem;
    top: 15%;
  }
`;

function Input({ children }) {
  return <InputContainer>{children}</InputContainer>;
}

export default Input;
