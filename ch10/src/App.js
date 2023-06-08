import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormHook from "./page/FormHook";
import TodoList from "./page/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormHook />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
