import React from "react";
import HeaderHome from "../components/headers/HeaderHome";
import styled from "styled-components";

const MainContainer = styled.div`
  color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BillboardContainer = styled.div`
  position: relative;
  width: 100%;
`;

const BillboardImg = styled.img`
  width: 100%;
`;

const BillboardContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-start;
  justify-content: flex-end;

  top: 13vh;
  left: 5vw;
  width: 35vw;
  img {
    width: 35vw;
  }
`;

const BillboardDesc = styled.div`
  width: transparent;
  overflow: hidden;
  font-size: 1.25rem;
`;

const BillboardRank = styled.div`
  display: flex;
  gap: 1rem;
  height: fit-content;
  align-items: center;
  p {
    font-size: 1.75rem;
  }
`;

const Top10Box = styled.div`
  width: 35px;
  height: 35px;

  border-radius: 5px;
  background-color: #e50914;
  font-size: 0.8rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Main() {
  return (
    <MainContainer>
      <HeaderHome />
      <BillboardContainer>
        <BillboardImg src="https://occ-0-988-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTGWNlPKlOUAQrmfU-qX4W59_lClB2BLRvbWRUKeFrJD0-RPVqTK_Pmz5cN1Bl_soiBdfyujLcnQL1nEa4n-5vrKNsXM9ZUoF1Dz.webp?r=5e5" />
        <BillboardContent>
          <img
            src="https://occ-0-988-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABR28zWU68DTkjnfFSzcwpt1FTLqI8GW6dwmN4P453eb2fZvBjHGl2rEDLdPjETCmHj7lyC2Kz5FPRxvqI5uvyetnKdz5Wvvo2lzBZvNwlinH.webp?r=8e2"
            alt=" 닥터 차정숙 로고"
          />
          <BillboardDesc>
            <BillboardRank>
              <Top10Box>
                <span>
                  <b>TOP</b>
                  <br />
                  10
                </span>
              </Top10Box>
              <p>오늘 시리즈 순위 1위</p>
            </BillboardRank>
            <p>
              의사직을 포기하고 가정주부로 살다가 20년만에 1년차 레지던트로
              돌아온 여자. 놀라운 일투성이인 병원에서 어떻게든 적응해보려는
              그녀의 고군분투기가 펼쳐진다.
            </p>
          </BillboardDesc>
        </BillboardContent>
      </BillboardContainer>
    </MainContainer>
  );
}

export default Main;
