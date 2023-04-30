import React from "react";
import styled from "styled-components";

const data = [
  {
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
    title: "TV로 즐기세요",
    content:
      "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
  },
  {
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png",
    title: "다양한 디바이스에서 시청하세요",
    content:
      "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
  },
  {
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/ko.png",
    title: "어린이 전용 프로필을 만들어 보세요",
    content:
      "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
  },
  {
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/ko.png",
    title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
    content: "광고 없는 멤버십에서만 이용 가능합니다.",
  },
];

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 7rem;
`;
const CardBox = styled.div`
  position: relative;
  width: 45vw;
  ::after {
    content: "";
    display: block;
    padding-bottom: 70%;
  }
`;

const InnerCard = styled.div`
  position: absolute;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0b143b, #400e20);
  color: white;

  box-sizing: border-box;
  padding: 2rem 3rem;
  padding-bottom: 0.5rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5rem;
  h4 {
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

function Card() {
  return (
    <CardContainer>
      {data.map((d, index) => (
        <CardBox key={d.title}>
          <InnerCard>
            <img width="60%" src={d.img} alt={d.title} />
            <ContentBox>
              <h4>{d.title}</h4>
              <p>{d.content}</p>
            </ContentBox>
          </InnerCard>
        </CardBox>
      ))}
    </CardContainer>
  );
}

export default Card;
