import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import Games from "../pages/Games";
import Creator from "../pages/Creator";
import Store from "../pages/Store";
import CreatorDetails from "../pages/CreatorDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamedetails/:id" element={<GameDetails />} />
      <Route path="/games" element={<Games />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/creatordetails/:id" element={<CreatorDetails />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
};

export default AllRoutes;
