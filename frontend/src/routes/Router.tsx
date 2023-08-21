import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/Intro';
import { Game } from '../pages/Game';
import Settings from '../pages/Settings';

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Game />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
);

export default routes;
