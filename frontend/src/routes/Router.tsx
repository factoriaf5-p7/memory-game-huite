import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Game from "../components/Game";
import Settings from "../components/Settings";
import { NotFound } from "../components/NotFound";

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
