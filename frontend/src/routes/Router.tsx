import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Game from "../pages/Game";
import Settings from "../pages/Settings";
import { NotFound } from "../pages/NotFound";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/game" element={<Game />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
