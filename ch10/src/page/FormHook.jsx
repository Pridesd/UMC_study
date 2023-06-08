import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  min-height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
`;

const Input = styled.input`
  outline: none;
  width: 90%;

  height: 1.725rem;
  font-size: 1.25rem;

  border: 1px solid ${({ error }) => (error ? "red" : "black")};
`;

const Btn = styled.button`
  width: 7rem;
  height: 2.8rem;
  background-color: aqua;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #008cff;
  }
`;

const Error = styled.p`
  font-size: 0.725;
  color: red;
`;

function FormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
  };
  return (
    <Container>
      <h1>폼 만들기</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="닉네임"
          {...register("nickName", {
            required: true,
            minLength: 5,
            maxLength: 15,
          })}
          error={errors.nickName}
        />
        {errors.nickName ? <Error>제대로 입력하세요</Error> : null}
        <Input
          placeholder="이름"
          {...register("name", {
            required: true,
          })}
          error={errors.name}
        />
        {errors.name ? <Error>이름을 입력해주세요</Error> : null}
        <Btn>제출</Btn>
      </Form>
    </Container>
  );
}

export default FormHook;
