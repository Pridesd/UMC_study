import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Home from "./page/Home";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Oauth from "./page/Oauth";

function App() {
  const { isLogin } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {isLogin ? (
            <Route path="/" element={<Main />} />
          ) : (
            <Route path="/" element={<Home />} />
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
