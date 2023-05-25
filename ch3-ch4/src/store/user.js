const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export const login = (nickname, email) => ({ type: LOGIN, nickname, email });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  isLogin: false,
  nickname: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
        nickname: action.nickname,
        email: action.email,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
