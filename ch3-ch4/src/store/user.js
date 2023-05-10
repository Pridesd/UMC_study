const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export const login = (id) => ({ type: LOGIN, id: id });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  isLogin: false,
  id: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("login!");
      return {
        isLogin: true,
        id: action.id,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
