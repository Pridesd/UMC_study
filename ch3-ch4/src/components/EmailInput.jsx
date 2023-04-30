import React from "react";
import styled from "styled-components";
import Button from "./Button";
const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  margin-top: 1.5rem;
  p {
    font-size: 1.25rem;
  }
`;
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
function EmailInput() {
  return (
    <EmailInputContainer>
      <p>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <InputContainer>
        <input id="email" type="email" />
        <label htmlFor="email">이메일 주소</label>
        <Button fontSize="1.55rem">시작하기 ></Button>
      </InputContainer>
    </EmailInputContainer>
  );
}

export default EmailInput;
