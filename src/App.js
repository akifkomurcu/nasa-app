import "./App.css";
import Content from "./pages/Content/Content";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Curiosity from "./pages/Curiosity/Curiosity";
import Opportunity from "./pages/Opportunity/Opportunity";
import Spirit from "./pages/Spirit/Spirit";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daily" element={<Content />} />
        <Route path="/curiosity" element={<Curiosity />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/spirit" element={<Spirit />} />
      </Routes>
    </>
  );
}

export default App;
