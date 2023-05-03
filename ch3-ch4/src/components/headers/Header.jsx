import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import Netflix_Logo_RGB from "../../asset/Netflix_Logo_RGB.png";
import LangSelect from "../LangSelect";

function Header({ isLogin }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Netflix_Logo_RGB} height="80px" alt="넷플릭스 로고" />

      <span
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <LangSelect />
            <Button>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#FFF",
                  fontSize: "0.725rem",
                }}
                to="/login"
              >
                로그인
              </Link>
            </Button>
          </>
        ) : null}
      </span>
    </div>
  );
}

export default Header;
