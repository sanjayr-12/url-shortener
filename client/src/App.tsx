import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Links from "./pages/Links";

const App = () => {
  return (
    <div data-theme={"cupcake"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
};

export default App;
