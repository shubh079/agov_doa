import "./App.css";
import Header from "./components/layouts/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="agov_wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>404 page not found!</>} />
      </Routes>
    </div>
  );
}

export default App;
