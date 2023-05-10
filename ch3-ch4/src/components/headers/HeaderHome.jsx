import React, { useState } from "react";
import Netflix_Logo_RGB from "../../asset/Netflix_Logo_RGB.png";
import { VscSignOut } from "react-icons/vsc";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user";

const HeaderContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;
  background: ${({ active }) =>
    active ? "#00081D" : "linear-gradient(to bottom, #000000b8, transparent)"};

  padding: 0.2rem 3.25rem;
  * {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Img = styled.img`
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => (radius ? radius : 0)}px;
`;

const MainNavBar = styled.div`
  display: flex;
  gap: 1rem;
  a {
    transition: all 0.5s;
  }
  a:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  p:last-child {
    display: flex;
    align-items: center;
    gap: 2px;
    span {
      transition: all 0.3s ease-in-out;
    }
    :hover span {
      transform: rotate(180deg);
    }
  }
`;

function HeaderHome({ user }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const scrollEvent = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", scrollEvent);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <HeaderContainer active={active}>
      <MainHeader>
        <Img height={58} src={Netflix_Logo_RGB} />
        <MainNavBar>
          <a href="#">홈</a>
          <a href="#">시리즈</a>
          <a href="#">영화</a>
          <a href="#">NEW! 요즘 대세 콘텐츠</a>
          <a href="#">내가 찜한 콘텐츠</a>
          <a href="#">언어별로 찾아보기</a>
        </MainNavBar>
      </MainHeader>
      <SubNavBar>
        <p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            data-name="Search"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
              fill="currentColor"
            ></path>
          </svg>
        </p>
        <p>키즈</p>
        <p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Standard"
            data-name="Notification"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>
        </p>
        <p>
          <p>안녕하세요 {user.id}님!</p>
          <Img
            height={32}
            radius={5}
            alt="아이콘"
            src="https://occ-0-988-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          />
          <span onClick={handleLogout}>
            <VscSignOut />
          </span>
        </p>
      </SubNavBar>
    </HeaderContainer>
  );
}

export default HeaderHome;
