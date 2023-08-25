import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Game from "../pages/Game/Game";
import { NotFound } from "../pages/NotFound";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
