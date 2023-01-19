import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project$1$Card from "./pages/Project$1$Card";
import Layout from "./pages/layout/index";
import "./index.scss";
import AccordionPage from "./pages/CP_AccordionPage";

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="card" element={<Project$1$Card />} />
          <Route path="accordion" element={<AccordionPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
