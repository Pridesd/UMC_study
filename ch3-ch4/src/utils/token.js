const accessTokenProvider = {
  get: () => localStorage.getItem("accessToken"),
  set: (token) => localStorage.setItem("accessToken", token),
  remove: () => localStorage.removeItem("accessToken"),
};

const refreshTokenProvider = {
  get: () => localStorage.getItem("refreshToken"),
  set: (token) => localStorage.setItem("refreshToken", token),
  remove: () => localStorage.removeItem("refreshToken"),
};

export { accessTokenProvider, refreshTokenProvider };
