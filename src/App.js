import "./App.css";
import NavBar from "./NavBar";
import AboutPage from "./pages/AboutPage";
import ArticuleListPage from "./pages/ArticuleListPage";
import ArticulePage from "./pages/ArticulePage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articules" element={<ArticuleListPage />} />
            <Route path="/articules:articuleId" element={<ArticulePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
