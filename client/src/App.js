import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./app.css";
import Services from "./pages/services/Services";
import Navbar from "./components/navbar/Navbar";
import Signip from "./pages/signup/Signip";
import Footer from "./components/footer/Footer";
import Service from "./pages/service/Service";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signip />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
