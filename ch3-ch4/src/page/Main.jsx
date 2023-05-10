import HeaderHome from "../components/headers/HeaderHome";
import styled from "styled-components";
import Button from "../components/Button";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const genres = [
  "trending",
  "topRate",
  "action",
  "adventure",
  "animation",
  "comedy",
  "drama",
];

const MainContainer = styled.div`
  z-index: 1;
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

const BillboardBtnList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const MovieListContainer = styled.div`
  position: relative;
  top: -300px;
  padding: 0 3rem;
`;
const Empty = styled.div`
  height: 20rem;
`;
function Main() {
  const user = useSelector((state) => state.user);
  return (
    <MainContainer>
      <HeaderHome user={user} />
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
            <BillboardBtnList>
              <Button backgroundColor="#FFF" color="#000" fontSize="1.2rem">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Hawkins-Icon Hawkins-Icon-Standard"
                  data-name="Play"
                >
                  <path
                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>재생</span>
              </Button>
              <Button backgroundColor="#858585" fontSize="1.2rem">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Hawkins-Icon Hawkins-Icon-Standard"
                  data-name="Info"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>상세 정보</span>
              </Button>
            </BillboardBtnList>
          </BillboardDesc>
        </BillboardContent>
      </BillboardContainer>
      <MovieListContainer>
        {genres.map((genre) => (
          <MovieList genre={genre} />
        ))}
      </MovieListContainer>
      <Empty />
    </MainContainer>
  );
}

export default Main;
