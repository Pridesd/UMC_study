import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Home from "./page/Home";
import { useDispatch, useSelector } from "react-redux";
import Oauth from "./page/Oauth";
import { useEffect, useState } from "react";
import { login } from "./store/user";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  useEffect(() => {
    setIsloading(true);
    const data = JSON.parse(localStorage.getItem("login"));
    if (data) {
      dispatch(login(data.nickname, data.email));
    }
    setIsloading(false);
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {isLogin ? (
            <Route path="/" element={<Main />} />
          ) : (
            <Route path="/" element={<Home isLoading={isLoading} />} />
          )}
          <Route path="/oauth/callback" element={<Oauth />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
