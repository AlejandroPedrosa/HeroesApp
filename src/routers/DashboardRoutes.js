import { NavBar } from "../components/ui/NavBar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Routes, Route } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";
export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="/" element={<MarvelScreen />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />
        </Routes>
      </div>
    </>
  );
};
