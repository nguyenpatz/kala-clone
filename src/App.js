import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./component/HeaderContainer";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Intro from "./pages/Intro";
import Policy from "./pages/Policy";
function App() {
  // <div className="App">
  // </div>
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Intro />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/dieu-khoan-chinh-sach" element={<Policy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
