import { REDIRECT_URI, REST_API_KEY } from "../../constants/oAuth";
import { axiosWithKakaoLogin } from "../axios";

const getKakaoToken = (code) =>
  axiosWithKakaoLogin.post(
    `/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    null,
    {
      headers: {
        "Content-Type": `application/x-www-form-urlencoded;charset=utf-8`,
      },
    }
  );

const getUserInfoByAccessToken = (accessToken) => {
  return axiosWithKakaoLogin.post("/v2/user/me", null, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Authorization: Bearer ${accessToken}`,
    },
  });
};

export { getKakaoToken, getUserInfoByAccessToken };
