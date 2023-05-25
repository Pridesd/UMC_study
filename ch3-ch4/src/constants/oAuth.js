const REST_API_KEY = process.env.REACT_APP_KAKAO_RESTAPI_KEY;
const REDIRECT_URI = "http://localhost:3000/oauth/callback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export { REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL };
