import "./App.css";
import Header from "./components/layouts/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layouts/footer/Footer";
function App() {
  return (
    <>
      <div className="">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 page not found!</>} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
