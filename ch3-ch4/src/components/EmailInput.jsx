import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
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

function EmailInput() {
  return (
    <EmailInputContainer>
      <p>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <Input>
        <input id="email" type="email" />
        <label htmlFor="email">이메일 주소</label>
        <Button fontSize="1.55rem">시작하기 ></Button>
      </Input>
    </EmailInputContainer>
  );
}

export default EmailInput;
