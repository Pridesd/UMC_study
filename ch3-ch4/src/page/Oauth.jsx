import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

import { getKakaoToken } from "../api/request/login";
import { login } from "../store/user";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

function Oauth() {
  const [searchParams, _] = useSearchParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = searchParams.get("code");
    getKakaoToken(code)
      .then((res) => {
        setTimeout(() => {});
        const { nickname, email } = decodeToken(res.data.id_token);
        dispatch(login(nickname, email));
        navigation("/");
      })
      .catch((e) => {
        alert("로그인 실패");
        navigation("/");
      });
  }, [searchParams, dispatch, navigation]);
  if (searchParams.get("error")) navigation("/");
  return (
    <Container>
      <h1>로그인 중</h1>
      <PuffLoader color="#FFF" />
    </Container>
  );
}

export default Oauth;
