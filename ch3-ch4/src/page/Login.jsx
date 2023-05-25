import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/headers/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/user";
import { KAKAO_AUTH_URL } from "../constants/oAuth";
import kakao_login_large_wide from "../asset/kakao_login_large_wide.png";
const Container = styled.div`
  min-height: 200vh;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg");
`;

const LoginBox = styled.div`
  position: absolute;
  right: 35%;
  min-width: 30%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SelectBox = styled.div`
  margin-top: -1.5rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff73;
`;

const AnotherBox = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;
function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogin = () => {
  //   console.log("click");
  //   if (email.length === 0 || password.length === 0) {
  //     alert("이메일 또는 비밀번호를 입력해주세요");
  //     return;
  //   }
  //   dispatch(login(email));
  //   setEmail("");
  //   setPassword("");
  // };

  //   {/* <Input>
  //   <input
  //     style={{
  //       backgroundColor: "rgba(255, 255, 255, 0.2)",
  //       border: "none",
  //       width: "100%",
  //     }}
  //     id="email"
  //     type="email"
  //     value={email}
  //     onChange={(e) => setEmail(e.target.value)}
  //   />
  //   <label htmlFor="email">이메일 주소 또는 전화번호</label>
  // </Input>
  // <Input>
  //   <input
  //     style={{
  //       backgroundColor: "rgba(255, 255, 255, 0.2)",
  //       border: "none",
  //       width: "100%",
  //     }}
  //     id="password"
  //     type="password"
  //     value={password}
  //     onChange={(e) => setPassword(e.target.value)}
  //   />
  //   <label htmlFor="password">비밀번호</label>
  // </Input> */}

  useEffect(() => {
    if (isLogin) navigate("/");
  }, [isLogin, navigate]);
  return (
    <Container>
      <Header />
      <LoginBox>
        <h1>로그인</h1>
        <a href={KAKAO_AUTH_URL} style={{ textAlign: "center" }}>
          <img src={kakao_login_large_wide} alt="" width="80%" />
        </a>
        <SelectBox>
          <div>
            <input id="login" type="checkbox" />
            <label htmlFor="login">로그인 정보 저장</label>
          </div>
          <p>도움이 필요하신가요?</p>
        </SelectBox>
        <AnotherBox>
          <h4>Netflix 회원이 아닌가요? 지금 가입하세요.</h4>
          <p>
            이 페이지는 Google reCAPTCHA의 보호를 받아 <br />
            사용자가 로봇이 아님을 확인합니다. <a href="/#">자세히 알아보기.</a>
          </p>
        </AnotherBox>
      </LoginBox>
    </Container>
  );
}

export default Login;
