import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error-page";
import Legeltetes from "./pages/Legeltetes";
import MainPage from "./pages/MainPage";
import Puli from "./pages/Puli";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shepherd" element={<MainPage />} />
        <Route path="/legeltetes" element={<Legeltetes />} />
        <Route path="/puli" element={<Puli />} />
        <Route path="/" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
