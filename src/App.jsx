import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project$1$Card from "./pages/Project$1$Card";
import Layout from "./pages/layout/index";
import AccordionPage from "./pages/CP_AccordionPage";
import DropdownPage from "./pages/CP_DropdownPage";
import TablePage from "./pages/CP_TablePage/index";
import CounterPage from "./pages/CP_CounterPage";

import "./index.scss";

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
          //* ─── Frontend Mentor Projects ────────
          <Route path="card" element={<Project$1$Card />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
