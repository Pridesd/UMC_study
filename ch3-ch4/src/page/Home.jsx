import React from "react";
import Header from "../components/headers/Header";
import EmailInput from "../components/EmailInput";
import styled from "styled-components";
import Card from "../components/Card";
import QnA from "../components/QnA";

const HomeContainer = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 8, 29, 0) 10%,
      rgba(0, 8, 29, 0.25) 25%,
      rgba(0, 8, 29, 0.605) 50%,
      rgba(0, 8, 29, 0.9) 75%,
      rgba(0, 8, 29, 1) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  min-height: 150vh;
  padding: 0 1.5rem;
`;

const MainContent = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin: 7rem 7rem;
  margin-bottom: 0;
  h1 {
    margin-bottom: 1rem;
    font-size: 4rem;
    font-weight: 900;
  }
`;
const Empty = styled.div`
  height: 40rem;
`;
function Home() {
  return (
    <HomeContainer>
      <Header isLogin={true} />
      <MainContent>
        <h1>영화, 시리즈 등을 무제한으로</h1>
        <div>다양한 디바이스에서 시청하세요. 언제든 해지할 수 있습니다.</div>
        <EmailInput />
      </MainContent>
      <Card />
      <QnA />
      <Empty />
    </HomeContainer>
  );
}

export default Home;
