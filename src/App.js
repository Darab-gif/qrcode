import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import QrCodePage from "./pages/QrCodePage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/qr" element={<QrCodePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
