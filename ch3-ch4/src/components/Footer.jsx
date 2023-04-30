import React from "react";
import styled from "styled-components";
import LangSelect from "./LangSelect";

const Container = styled.div`
  margin: 4rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  color: #ffffff73;
`;

const SiteList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  a {
    color: #ffffff73;
  }
`;

function Footer() {
  return (
    <Container>
      <div>질문이 있으신가요? 문의 전화: 080-001-9587</div>
      <SiteList>
        <a href="">자주 묻는 질문</a>
        <a href="">고객 센터</a>
        <a href="">계정</a>
        <a href="">미디어 센터</a>
        <a href="">투자 정보</a>
        <a href="">입사 정보</a>
        <a href="">넷플릭스 지원 디바이스</a>
        <a href="">이용약관</a>
        <a href="">개인정보 처리 방침</a>
        <a href="">쿠키 설정</a>
        <a href="">회사 정보</a>
        <a href="">문의 하기</a>
        <a href="">속도 테스트</a>
        <a href="">법적 고지</a>
        <a href="">오직 넷플릭스에서</a>
      </SiteList>
      <LangSelect />
      <div>넷플릭스 대한민국 </div>
      <div>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        <br />
        제2018-서울종로-0426호 전화번호: 080-001-9587 대표: 레지널드 숀 톰프슨
        <br />
        이메일 주소: korea@netflix.com 주소: 대한민국 서울특별시 종로구 우정국로
        <br />
        26, 센트로폴리스 A동 20층 우편번호 03161 사업자등록번호: 165-87-00119
        <br />
        클라우드 호스팅: Amazon Web Services Inc. <br />
        공정거래위원회 웹사이트
      </div>
    </Container>
  );
}

export default Footer;
