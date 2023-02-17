import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project$1$Card from "./pages/Project$1$Card";
import Layout from "./pages/layout/index";
import AccordionPage from "./pages/CP_AccordionPage";
import DropdownPage from "./pages/CP_DropdownPage";
import TablePage from "./pages/CP_TablePage/index";
import CounterPage from "./pages/CP_CounterPage";
import MediaPlaylist from "./pages/CP_MediaPlaylist";
import CarsPage from "./pages/CP_Cars";
import AlbumsPage from "./pages/CP_AlbumsPage";
import "./index.scss";
import { HuddlePage } from "./pages";

function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          //* ─── Self-learning Projects ──────────
          <Route index element={<Home />} />
          //* ─── Course Projects ─────────────────
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="mediaplaylist" element={<MediaPlaylist />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="albums" element={<AlbumsPage />} />
          //* ─── Frontend Mentor Projects ────────
          <Route path="huddle" element={<HuddlePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
